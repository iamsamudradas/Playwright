import { expect } from "@playwright/test";
import { test } from "../test-options";

test.beforeEach(async ({ page , globalsQaURL}) => {
  await page.goto(globalsQaURL);
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