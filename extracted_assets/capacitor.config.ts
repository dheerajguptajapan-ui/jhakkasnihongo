import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jhakkas.nihongo',
  appName: 'Jhakkas Nihongo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
