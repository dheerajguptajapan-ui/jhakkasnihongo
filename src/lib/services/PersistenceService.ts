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
  SETTINGS: 'jhakkas_settings'
};

export interface AppSettings {
  showFurigana: boolean;
  theme: 'light' | 'dark' | 'system';
}

export const PersistenceService = {
  // --- User Profile ---
  async getUserProfile(): Promise<UserProfile | null> {
    return await NativeStorage.get<UserProfile>(STORAGE_KEYS.USER_PROFILE);
  },

  async saveUserProfile(profile: UserProfile): Promise<void> {
    await NativeStorage.set(STORAGE_KEYS.USER_PROFILE, profile);
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
    const defaultSettings: AppSettings = { showFurigana: true, theme: 'system' };
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
  }
};
