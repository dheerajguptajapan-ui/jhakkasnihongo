import { Capacitor } from '@capacitor/core';

/**
 * Top 1% Android Persistence Strategy:
 * Dynamic Linkage Pattern: We lazy-load native plugins only when on a native platform.
 * This prevents initialization deadlocks in browser environments and optimizes cold-start times.
 */

export const NativeStorage = {
  async set(key: string, value: any): Promise<void> {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    
    if (Capacitor.isNativePlatform()) {
      try {
        const { Preferences } = await import('@capacitor/preferences');
        await Preferences.set({
          key,
          value: stringValue,
        });
      } catch (e) {
        console.warn('[NativeStorage] Preference set failed:', e);
      }
    }
    
    // Durable layer: Sync to localStorage
    localStorage.setItem(key, stringValue);
  },

  async get<T>(key: string): Promise<T | null> {
    let value: string | null = null;

    if (Capacitor.isNativePlatform()) {
      try {
        const { Preferences } = await import('@capacitor/preferences');
        const result = await Preferences.get({ key });
        value = result.value;
      } catch (e) {
        console.warn('[NativeStorage] Preference get failed:', e);
      }
    }
    
    // Core fallback to localStorage
    const finalValue = value || localStorage.getItem(key);
    
    if (!finalValue) return null;

    try {
      return JSON.parse(finalValue) as T;
    } catch {
      return finalValue as unknown as T;
    }
  },

  async remove(key: string): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      try {
        const { Preferences } = await import('@capacitor/preferences');
        await Preferences.remove({ key });
      } catch {}
    }
    localStorage.removeItem(key);
  },

  async clear(): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      try {
        const { Preferences } = await import('@capacitor/preferences');
        await Preferences.clear();
      } catch {}
    }
    localStorage.clear();
  }
};
