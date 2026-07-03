import { test, expect } from "@playwright/test";
import { delay } from "rxjs-compat/operator/delay";


test.beforeEach(async({page}) =>{
await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})

test.describe('suite1', () =>{

test.beforeEach(async({page}) =>{
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})

test('emailInput', async({page}) =>{
   const emailInput = await page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"})
   await emailInput.fill("test@test.com")
   await emailInput.clear()
   await emailInput.pressSequentially("test2@test.com", {delay:500})

   //generic assertion
   const inputValue = await emailInput.inputValue()
   expect(inputValue).toEqual("test2@test.com")

   //locator assertion
   expect(emailInput).toHaveValue('test2@test.com')


})

test('radio button', async({page}) =>{
   const emailInput = page.locator('nb-card', {hasText:"Using the Grid"})
   await emailInput.getByLabel('Option 1').check({force:true})     //because the lebel has 'visually hidden inside it'
   await emailInput.getByRole("radio",{name:"option 2"}).check({force:true}) 
   const radioStatus = await emailInput.getByLabel('Option 1').isChecked()
   expect(radioStatus).toBeFalsy
   await expect(emailInput.getByRole("radio",{name:"option 2"})).toBeChecked()
})

})