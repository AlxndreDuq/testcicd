// tests/e2e/sum.e2e.test.js
import { test, expect } from '@playwright/test';

test('Addition simulée dans une page HTML', async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <input id="a" value="2"/>
        <input id="b" value="3"/>
        <button onclick="document.getElementById('result').textContent = Number(document.getElementById('a').value) + Number(document.getElementById('b').value)">Add</button>
        <p id="result"></p>
      </body>
    </html>
  `);

  await page.click('button');
  const result = await page.textContent('#result');
  expect(result).toBe('5');
});
