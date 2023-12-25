import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.play.leocarbs',
  appName: 'Carbs',
  bundledWebRuntime: false,
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  },
  cordova: {}
};

export default config;
