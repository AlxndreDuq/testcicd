import { test, expect } from '@playwright/test';

test('Test fonction sum via UI', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#a', '10');
  await page.fill('#b', '15');
  await page.click('#btn');

  const result = await page.textContent('#result');
  expect(result).toBe('25');
});
