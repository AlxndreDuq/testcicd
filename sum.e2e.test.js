const { test, expect } = require('@playwright/test');

test('Simple Playwright E2E test', async ({ page }) => {
  // Exemple de test HTML local simulant sum
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
