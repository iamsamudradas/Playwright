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


