import { test, expect } from "@playwright/test";
import {NavigationPage} from '../page-objects/navigationPage'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/')
});

test.describe('suite1', () =>{

test('navigate To Form Page', async({page}) =>{
const navigateTo = new NavigationPage(page);
  await navigateTo.formLayout()
  await page.waitForTimeout(2000)
  await navigateTo.datepicker()
  await page.waitForTimeout(2000)
  await navigateTo.smartTable()
  await page.waitForTimeout(2000)
  await navigateTo.toastrPage()
  await page.waitForTimeout(2000)
  await navigateTo.toolTip()
})
})