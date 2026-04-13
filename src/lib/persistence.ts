import { UserItem, UserProfile } from '../types';

const STORAGE_KEYS = {
  USER_ITEMS: 'jhakkas_user_items',
  USER_PROFILE: 'jhakkas_user_profile',
  SETTINGS: 'jhakkas_settings'
};

export interface AppSettings {
  showFurigana: boolean;
  theme: 'light' | 'dark' | 'system';
}

export const persistence = {
  // --- User Profile ---
  getUserProfile: (): UserProfile | null => {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  },

  saveUserProfile: (profile: UserProfile) => {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  // --- User Items (SRS Progress) ---
  getUserItems: (): UserItem[] => {
    const data = localStorage.getItem(STORAGE_KEYS.USER_ITEMS);
    return data ? JSON.parse(data) : [];
  },

  saveUserItems: (items: UserItem[]) => {
    localStorage.setItem(STORAGE_KEYS.USER_ITEMS, JSON.stringify(items));
  },

  updateUserItem: (uid: string, itemId: string, update: Partial<UserItem>) => {
    const items = persistence.getUserItems();
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
    
    persistence.saveUserItems(items);
  },

  // --- Settings ---
  getSettings: (): AppSettings => {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    const defaultSettings: AppSettings = { showFurigana: true, theme: 'system' };
    return data ? { ...defaultSettings, ...JSON.parse(data) } : defaultSettings;
  },

  saveSettings: (settings: Partial<AppSettings>) => {
    const current = persistence.getSettings();
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({ ...current, ...settings }));
  },

  // --- Backup & Restore ---
  exportData: () => {
    const data = {
      profile: persistence.getUserProfile(),
      items: persistence.getUserItems(),
      settings: persistence.getSettings(),
      exportedAt: new Date().toISOString(),
      version: '2.0.0'
    };
    return JSON.stringify(data, null, 2);
  },

  importData: (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      
      // Basic validation
      if (!data.profile || !Array.isArray(data.items)) {
        throw new Error('Invalid backup format');
      }

      // Save to local storage
      persistence.saveUserProfile(data.profile);
      persistence.saveUserItems(data.items);
      if (data.settings) {
        persistence.saveSettings(data.settings);
      }
      
      return true;
    } catch (error) {
      console.error('Import failed:', error);
      return false;
    }
  }
};
