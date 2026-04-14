import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PersistenceService } from '../PersistenceService';
import { UserProfile, UserItem } from '../../../types';

describe('PersistenceService', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('User Profile', () => {
    const mockProfile: UserProfile = {
      uid: 'user-123',
      displayName: 'Test User',
      level: 5,
      xp: 1000,
      synapticStability: 1.0,
      linkQuality: 100.0,
      joinedAt: '2026-01-01',
      role: 'user'
    };

    it('should save and retrieve user profile', async () => {
      await PersistenceService.saveUserProfile(mockProfile);
      const profile = await PersistenceService.getUserProfile();
      expect(profile).toEqual(mockProfile);
    });

    it('should return null if no profile exists', async () => {
      const profile = await PersistenceService.getUserProfile();
      expect(profile).toBeNull();
    });
  });

  describe('User Items (SRS)', () => {
    const mockItems: UserItem[] = [
      { itemId: 'item-1', uid: 'user-123', srsStage: 1, nextReviewAt: null, streak: 0, easinessFactor: 2.5, interval: 0, repetitions: 0 }
    ];

    it('should save and retrieve user items', async () => {
      await PersistenceService.saveUserItems(mockItems);
      const items = await PersistenceService.getUserItems();
      expect(items).toHaveLength(1);
      expect(items[0].itemId).toBe('item-1');
    });

    it('should update an existing item', async () => {
      await PersistenceService.saveUserItems(mockItems);
      await PersistenceService.updateUserItem('user-123', 'item-1', { srsStage: 2, streak: 1 });
      
      const items = await PersistenceService.getUserItems();
      expect(items[0].srsStage).toBe(2);
      expect(items[0].streak).toBe(1);
    });

    it('should add a new item if it doesnt exist', async () => {
      await PersistenceService.updateUserItem('user-123', 'new-item', { srsStage: 1 });
      const items = await PersistenceService.getUserItems();
      expect(items).toHaveLength(1);
      expect(items[0].itemId).toBe('new-item');
    });
  });

  describe('Settings', () => {
    it('should return default settings if none saved', async () => {
      const settings = await PersistenceService.getSettings();
      expect(settings.showFurigana).toBe(true);
      expect(settings.theme).toBe('system');
    });

    it('should update specific settings', async () => {
      await PersistenceService.saveSettings({ theme: 'dark' });
      const settings = await PersistenceService.getSettings();
      expect(settings.theme).toBe('dark');
      expect(settings.showFurigana).toBe(true); // preserved
    });
  });
});
