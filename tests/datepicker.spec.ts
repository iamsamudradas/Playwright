import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByText('Forms').click()
  await page.getByText('Datepicker').click()
});

test.describe('suite1', () =>{

test('pickdateVerifydate', async({page}) =>{
  
    await page.getByPlaceholder('Form Picker').click()
    await page.locator('.day-cell').getByText('15',{exact:true}).click()
    await expect(page.getByPlaceholder('Form Picker')).toHaveValue('Jul 15, 2026')
})

test('pickdateVerifydateauto', async({page}) =>{
  
    const picker=  page.getByPlaceholder('Form Picker')
    await picker.click()

    //get the date 7 days from now
    let date = new Date()
    date.setDate(date.getDate() + 7)
   //get the date in the format to assert with the input value
    const excpectedDate = date.getDate().toString()
    const excpectedMonthshort = date.toLocaleString('default', { month: 'short' })
    const excpectedYear = date.getFullYear().toString()
    //combine the date to assert with the input value
    const datetoAssert = excpectedMonthshort + " " + excpectedDate + ", " + excpectedYear
   //get the month and year from the calendar to compare with the expected month and year
    let calenderMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
   //get the month and year from the date object to compare with the calendar month and year
    const excpectedMonthlong = date.toLocaleString('default', { month: 'long' })
    //combine the month and year to compare with the calendar month and year
    const dateObjectToCompare = " "+excpectedMonthlong+" "+excpectedYear+" "
//loop until the calendar month and year matches the expected month and year
    while(calenderMonthAndYear?.includes(dateObjectToCompare) == false){

       await page.getByRole('button', {name:"Next month"}).click()
    }

    

    await page.locator('.day-cell').getByText(excpectedDate,{exact:true}).click()
    await expect(page.getByPlaceholder('Form Picker')).toHaveValue(datetoAssert)
})

})