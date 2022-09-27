import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shell',
  webDir: '../../dist/apps/shell',
  bundledWebRuntime: false,
  plugins: {
    Portals: {
      shell: {
        name: 'shell',
        webDir: '../../dist/apps/shell',
      },
      apps: [
        {
          name: 'remote',
          webDir: '../../dist/apps/remote',
        },
      ],
    },
  },
};

export default config;
