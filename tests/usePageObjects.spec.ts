import { test, expect } from "@playwright/test";
import { pageManager } from "../page-objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/')
});

test.describe('suite1', () =>{

test('navigate To Form Page', async({page}) =>{
  const pm = new pageManager(page);
  await pm.navigateTo().formLayout()
  await page.waitForTimeout(2000)
  await pm.navigateTo().datepicker()
  await page.waitForTimeout(2000)
  await pm.navigateTo().smartTable()
  await page.waitForTimeout(2000)
  await pm.navigateTo().toastrPage()
  await page.waitForTimeout(2000)
  await pm.navigateTo().toolTip()
})

test('using the grid parameterised', async({page}) =>{
  const pm = new pageManager(page);
  await pm.navigateTo().formLayout()
  await pm.onFormLayoutsPage().submitUsingThegrid('test@example.com', 'password123', 'Option 1')
})

test('using the grid parameterised for inline form', async({page}) =>{
  const pm = new pageManager(page);
  await pm.navigateTo().formLayout()
  await pm.onInlineFormPage().submitInlineForm('John Doe', 'john@example.com', true)
})

})