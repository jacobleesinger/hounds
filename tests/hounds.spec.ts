import { test, expect } from '@playwright/test';

test('hounds', async ({ page }) => {
  console.log('before route');
  await page.route('https://dog.ceo/api/breeds/list/all', async route => {
    console.log('inside route')
    const json = {
      message: { 'hounds': ['redbone'] }
    };
    await route.fulfill({ json });
  });

  console.log('after route');
  
  await page.goto('http://localhost:3000/hounds');

  await expect(page.locator('h1')).toHaveText('Hounds');

  await expect(page.getByText('redbone')).toBeVisible();
});
