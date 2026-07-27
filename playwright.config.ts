import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:8000',
  },
  projects: [
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }, // 390px
    },
    {
      name: 'Mobile Chrome (Small)',
      use: { ...devices['Pixel 5'], viewport: { width: 320, height: 480 } }, // 320px
    },
    {
      name: 'Tablet',
      use: { ...devices['iPad (gen 7)'] }, // 768px
    },
    {
      name: 'Desktop (1024px)',
      use: { viewport: { width: 1024, height: 768 } }, // 1024px
    },
    {
      name: 'Desktop Large (1920px)',
      use: { viewport: { width: 1920, height: 1080 } }, // 1920px
    },
  ],
  webServer: {
    command: 'php artisan serve',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
  },
});
