import { test, expect } from "@playwright/test";


test.describe('suite1', () =>{

test.beforeEach(async({page}) =>{
await page.goto('/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})



test('navigatetoDatePicker', async ({page}) =>{
  
   await page.getByText('DatePicker').click()
})

test('locatorSyntaxRules', async ({page}) =>{
  
    
    //by tag name
    await page.locator('input').first().click()

    //by id
    await page.locator('#inputEmail1').click()

    //by class
    await page.locator('.shape-rectangle')

    //by attribut
    page.locator('[placeholder="Email"]')

    //combo
    page.locator('#inputEmail1[placeholder="Email"]')

})

test('user facing locator', async({page}) =>{
     
     await page.getByRole('textbox',{name:"Email"}).first().click()
     await page.getByRole('button',{name:"SUBMIT"}).first().click()

     await page.getByLabel('Email').first().click()
    })

    test('locating child elements', async({page}) =>{
     
     await page.locator('nb-card nb-radio :text-is("Option 1")').click()
     await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
     await page.locator('nb-card').locator('nb-card-body').locator(':text-is("Sign in")').first().click()
     await page.locator('nb-card').nth(3).getByRole('button').click()
    })

    test('locating parent elements', async({page}) =>{
     
     await page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('button').click()
     await page.locator('nb-card', {has: page.locator('#inputEmail1')}).click()
     await page.locator('nb-card').filter({hasText:"Basic Form"}).getByRole('button').click()

    })

    test('reusing locator', async({page}) =>{

      const basicForm = page.locator('nb-card').filter({hasText:"Basic Form"})
      const emailField = basicForm.locator('#exampleInputEmail1')
      
     await emailField.fill("test@test.com")
     await basicForm.locator('#exampleInputPassword1').fill("password")
     await basicForm.locator('nb-checkbox').click()
     await basicForm.getByRole('button').click()
     await expect(emailField).toHaveValue("test@test.com")

    })

    test('extracting values', async({page}) =>{

      const basicForm = page.locator('nb-card').filter({hasText:"Basic Form"})
      const buttonText = await basicForm.locator('button').textContent()
      expect(buttonText).toEqual('Submit')

      const radioAll = await page.locator('nb-radio').allTextContents()
      expect(radioAll).toContain('Option 1')
    })



})



