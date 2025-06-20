import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npx serve . -l 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI, // ne relance pas en local si déjà lancé
    timeout: 10000, // timeout de 10s pour le démarrage du serveur
  },
  testDir: 'tests/e2e',
});