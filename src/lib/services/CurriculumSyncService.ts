import { PersistenceService } from './PersistenceService';
import { Item } from '../../types';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/dheerajguptajapan-ui/jhakkasnihongo/main/curriculum_update.json';

export class CurriculumSyncService {
  /**
   * Fetches latest curriculum updates from GitHub raw content.
   * Format expected: { version: string, items: Item[] }
   */
  static async syncWithGitHub(): Promise<boolean> {
    try {
      console.log('Initiating sync with GitHub Mastery Source...');
      const response = await fetch(GITHUB_RAW_URL, { cache: 'no-store' });
      
      if (!response.ok) {
        throw new Error(`Mastery Source unreachable: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data && Array.isArray(data.items)) {
        // Save the remote items to local persistence
        // These will be merged at runtime in CurriculumService
        await PersistenceService.setRemotePatch(data.items);
        console.log(`Successfully synced ${data.items.length} lexical items from GitHub.`);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Lexical Sync Failed:', error);
      return false;
    }
  }

  /**
   * Resets local curriculum patch
   */
  static async resetSync(): Promise<void> {
    await PersistenceService.setRemotePatch([]);
  }
}
