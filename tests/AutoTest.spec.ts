import { test, expect } from "@playwright/test";



test.beforeEach(async({page}) =>{
  await page.goto(process.env.URL||'http://uitestingplayground.com/ajax')
  await page.getByText('Button Triggering AJAX Request').click()
}) 


test('autoWait', async ({page}) =>{
  const successButton = page.locator('.bg-success')
  await successButton.click()
})