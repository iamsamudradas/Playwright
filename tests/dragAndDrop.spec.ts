import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
});

test.describe('suite1', () =>{

test('dragAndDrop', async({page}) =>{

  const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')
  await frame.locator('.ui-widget-content', { hasText: 'High Tatras 2' }).dragTo(frame.locator('#trash'));

  //more precise
  await frame.locator('.ui-widget-content', { hasText: 'High Tatras 4' }).hover();
  await page.mouse.down();
  await frame.locator('#trash').hover();
  await page.mouse.up();
})

})