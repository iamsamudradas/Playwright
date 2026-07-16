import { test, expect } from "@playwright/test";
import { pageManager } from "../page-objects/pageManager";
import { faker } from "@faker-js/faker"

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
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(" ","")}${faker.number.int(10)}@test.com`
  await pm.navigateTo().formLayout()
  await pm.onInlineFormPage().submitInlineForm(randomFullName, randomEmail, true)
})

})