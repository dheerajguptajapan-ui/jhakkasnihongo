import { UserItem, UserProfile } from '../../types';
import { NativeStorage } from './NativeStorage';

/**
 * Top 1% Persistence Logic:
 * This service abstracts the storage keys and provides async access to user data.
 * Crucial for avoiding UI jank on slow Android storage.
 */

const STORAGE_KEYS = {
  USER_ITEMS: 'jhakkas_user_items',
  USER_PROFILE: 'jhakkas_user_profile',
  SETTINGS: 'jhakkas_settings',
  CURRICULUM_PATCH: 'jhakkas_curriculum_patch',
  FEEDBACK: 'jhakkas_feedback',
  ACCOUNTS: 'jhakkas_accounts_registry',
  SESSION: 'jhakkas_active_session'
};

export interface AppSettings {
  showFurigana: boolean;
  theme: 'light' | 'dark' | 'system';
  fontScale: number; // 0.6 to 1.4
  dailyNewCards: number; // 20 to 100
}

export const PersistenceService = {
  // --- User Profile ---
  async getUserProfile(): Promise<UserProfile | null> {
    return await NativeStorage.get<UserProfile>(STORAGE_KEYS.USER_PROFILE);
  },

  async saveUserProfile(profile: UserProfile): Promise<void> {
    // Ensure dailySyncHistory and enrolledLevels are initialized
    if (!profile.dailySyncHistory) profile.dailySyncHistory = {};
    if (!profile.enrolledLevels) profile.enrolledLevels = [];
    if (!profile.dailyGoal) profile.dailyGoal = 20; // Default goal
    await NativeStorage.set(STORAGE_KEYS.USER_PROFILE, profile);
  },

  async trackActivity(type: 'lessons' | 'reviews'): Promise<void> {
    const profile = await this.getUserProfile();
    if (!profile) return;

    const today = new Date().toISOString().split('T')[0];
    if (!profile.dailySyncHistory) profile.dailySyncHistory = {};
    if (!profile.dailySyncHistory[today]) {
      profile.dailySyncHistory[today] = { lessons: 0, reviews: 0 };
    }

    profile.dailySyncHistory[today][type] += 1;
    
    // Also increment global XP based on activity
    profile.xp += type === 'lessons' ? 10 : 5;
    profile.synapticStability = Math.min(100, (profile.synapticStability || 0) + 0.1);
    
    await this.saveUserProfile(profile);
  },

  // --- User Items (SRS Progress) ---
  async getUserItems(): Promise<UserItem[]> {
    const items = await NativeStorage.get<UserItem[]>(STORAGE_KEYS.USER_ITEMS);
    return items || [];
  },

  async saveUserItems(items: UserItem[]): Promise<void> {
    await NativeStorage.set(STORAGE_KEYS.USER_ITEMS, items);
  },

  async updateUserItem(uid: string, itemId: string, update: Partial<UserItem>): Promise<void> {
    const items = await this.getUserItems();
    const index = items.findIndex(i => i.itemId === itemId && i.uid === uid);
    
    if (index >= 0) {
      items[index] = { ...items[index], ...update };
    } else {
      const newItem: UserItem = {
        uid,
        itemId,
        srsStage: 0,
        nextReviewAt: null,
        streak: 0,
        easinessFactor: 2.5,
        interval: 0,
        repetitions: 0,
        ...update
      };
      items.push(newItem);
    }
    
    await this.saveUserItems(items);
  },

  // --- Settings ---
  async getSettings(): Promise<AppSettings> {
    const data = await NativeStorage.get<AppSettings>(STORAGE_KEYS.SETTINGS);
    const defaultSettings: AppSettings = { 
      showFurigana: true, 
      theme: 'system', 
      fontScale: 0.8, // 20% reduction by default
      dailyNewCards: 20
    };
    return data ? { ...defaultSettings, ...data } : defaultSettings;
  },

  async saveSettings(settings: Partial<AppSettings>): Promise<void> {
    const current = await this.getSettings();
    await NativeStorage.set(STORAGE_KEYS.SETTINGS, { ...current, ...settings });
  },

  // --- Export / Import ---
  async exportData(): Promise<string> {
    const data = {
      profile: await this.getUserProfile(),
      items: await this.getUserItems(),
      settings: await this.getSettings(),
      exportedAt: new Date().toISOString(),
      version: '3.0.0' // Major bump for native storage
    };
    return JSON.stringify(data, null, 2);
  },

  async importData(content: string): Promise<boolean> {
    try {
      const data = JSON.parse(content);
      if (!data.items || !Array.isArray(data.items)) return false;
      
      if (data.profile) await this.saveUserProfile(data.profile);
      if (data.settings) await this.saveSettings(data.settings);
      await this.saveUserItems(data.items);
      
      return true;
    } catch (e) {
      console.error('Failed to import data:', e);
      return false;
    }
  },


  // --- Feedback ---
  async getAllFeedback(): Promise<any[]> {
    const data = await NativeStorage.get<any[]>(STORAGE_KEYS.FEEDBACK);
    return data || [];
  },

  async saveFeedback(feedback: any): Promise<void> {
    const current = await this.getAllFeedback();
    current.push(feedback);
    await NativeStorage.set(STORAGE_KEYS.FEEDBACK, current);
  },

  async resolveFeedback(id: string): Promise<void> {
    const current = await this.getAllFeedback();
    const index = current.findIndex(f => f.id === id);
    if (index >= 0) {
      current[index].isResolved = true;
      await NativeStorage.set(STORAGE_KEYS.FEEDBACK, current);
    }
  },

  async deleteFeedback(id: string): Promise<void> {
    const current = await this.getAllFeedback();
    const filtered = current.filter(f => f.id !== id);
    await NativeStorage.set(STORAGE_KEYS.FEEDBACK, filtered);
  },

  // --- Universal Registry & Session ---
  async getAccountRegistry(): Promise<any[]> {
    const data = await NativeStorage.get<any[]>(STORAGE_KEYS.ACCOUNTS);
    return data || [];
  },

  async saveToRegistry(account: any): Promise<void> {
    const registry = await this.getAccountRegistry();
    const index = registry.findIndex(a => a.uid === account.uid);
    if (index >= 0) {
      registry[index] = account;
    } else {
      registry.push(account);
    }
    await NativeStorage.set(STORAGE_KEYS.ACCOUNTS, registry);
  },

  async getSession(): Promise<any | null> {
    return await NativeStorage.get<any>(STORAGE_KEYS.SESSION);
  },

  async setSession(session: any): Promise<void> {
    await NativeStorage.set(STORAGE_KEYS.SESSION, session);
  },

  async clearSession(): Promise<void> {
    await NativeStorage.remove(STORAGE_KEYS.SESSION);
  },

  async getAllUserProfiles(): Promise<any[]> {
    // For admin to see all registered profiles
    const registry = await this.getAccountRegistry();
    // We'd also need to load their individual profiles if stored separately, 
    // but for now we'll store basic user info in the registry.
    return registry;
  },

  async deleteAccount(uid: string): Promise<void> {
    const registry = await this.getAccountRegistry();
    const filtered = registry.filter(a => a.uid !== uid);
    await NativeStorage.set(STORAGE_KEYS.ACCOUNTS, filtered);
  }
};
