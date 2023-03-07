import { test, expect } from '@playwright/test';

import { server } from '../mocks/server';

test.beforeAll(async () => {
  server.listen({ onUnhandledRequest: 'error'});
  server.printHandlers();
});

test.afterAll(async () => {
  server.close();
});

test('hounds', async ({ page }) => {
  // print handlers
  // should see the handler for the dog.ceo api
  server.printHandlers();
  
  await page.goto('http://localhost:3000/hounds');

  await expect(page.locator('h1')).toHaveText('Hounds');

  await expect(page.getByText('redbone')).toBeVisible();
});
