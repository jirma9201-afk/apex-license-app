import type { CapacitorConfig } from '@capacitor/cli';

// Change appId to your own reverse-domain identifier before publishing,
// e.g. "com.yourstudio.apexlicense". You must own/register this domain
// style ID — it's how both app stores identify your app.
const config: CapacitorConfig = {
  appId: 'com.yourstudio.apexlicense', // TODO: replace with your own reverse-domain ID before publishing
  appName: 'Apex License',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: '#0E1513',
  ios: {
    contentInset: 'always'
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
