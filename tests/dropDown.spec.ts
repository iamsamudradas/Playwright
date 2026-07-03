import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('dropDown', async ({ page }) => {
  const dropDown1 = page.locator('ngx-header nb-select');
  await expect(dropDown1).toBeVisible();
  await dropDown1.click();
  page.getByRole('list')
  page.getByRole('listitem')

  const optionList = page.getByRole('list').locator('nb-option')
  await expect(optionList).toHaveCount(4);
  await expect(optionList).toHaveText(['Light', 'Dark', 'Cosmic', 'Corporate']);
  await optionList.filter({ hasText: 'Cosmic' }).click();

});

test('toolTip', async ({ page }) => {
  await page.getByText('Modal & Overlays').click()
   await page.getByText('ToolTip').click()
  const toolTipCard = page.locator('nb-card', { hasText: 'Tooltip Placements' });
  await toolTipCard.getByRole('button', { name: "Top" }).hover();
  //page.getByRole('tooltip')
  const toolTip = await page.locator('nb-tooltip').textContent();
  expect(toolTip).toEqual('This is a tooltip');

});


test('dialogueBox', async ({ page }) => {
  await page.getByText('Tables & data').click()
  await page.getByText('Smart Table').click()

  page.on('dialog', dialog => {
   expect(dialog.message()).toEqual('Are you sure you want to delete?')
   dialog.accept()
  })
  await page.getByRole('table').locator('tr').filter({ hasText: 'mdo@gmail.com' }).locator('.nb-trash').click()
  await expect(page.getByRole('table').locator('tr').filter({ hasText: 'mdo@gmail.com' })).toHaveCount(0)
})

test('web tables', async ({ page }) => {
  await page.getByText('Tables & data').click()
  await page.getByText('Smart Table').click()

  await page.getByRole('table').locator('tr').filter({ hasText: 'twitter@outlook.com' }).locator('.nb-edit').click()
  const row3 = page.getByRole('table').locator('tr').filter({ hasText: 'twitter@outlook.com' })
  await page.locator('input-editor').getByPlaceholder('Age').clear()
  await page.locator('input-editor').getByPlaceholder('Age').fill('25')
  await page.locator('.nb-checkmark').click()
  
})

test('web tables2', async ({ page }) => {
  await page.getByText('Tables & data').click()
  await page.getByText('Smart Table').click()
  await page.locator('.ng2-smart-pagination').getByText('2').click()

   const targetByRowId  = page.getByRole('row',{name:"11"}).filter({has: page.locator('td').nth(1).getByText('11')})
   await targetByRowId.locator('.nb-edit').click()
   await page.locator('input-editor').getByPlaceholder('E-mail').clear()
   await page.locator('input-editor').getByPlaceholder('E-mail').fill('sam@test.com')
   await page.locator('.nb-checkmark').click()

  })

  test('testFilterOfTheTable', async ({ page }) => {
  await page.getByText('Tables & data').click()
  await page.getByText('Smart Table').click()
  const ages =["20","30","40","200"]
  for (const age of ages){
    await page.locator('input-filter').getByPlaceholder('Age').fill(age)
    await page.waitForTimeout(1000)
    const agerows =page.locator('tbody tr')

    for(let row of await agerows.all()){
      const ageValue = await row.locator('td').last().textContent()
      console.log(ageValue)
      if(age !== "200")
       expect(ageValue).toEqual(age)
      else
        expect(page.locator('tbody tr').getByText('No data found')).toBeVisible()
    }
  }
  })


