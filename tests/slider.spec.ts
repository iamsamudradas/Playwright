import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('suite1', () =>{

test('sliderApproach1', async({page}) =>{
  //update attrobutre
    const tempGuage = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    await tempGuage.evaluate(node => {
        node.setAttribute('cy', '232.630');
        node.setAttribute('cx', '232.630');
    })
    await tempGuage.click()
})

test('sliderApproach2', async({page}) =>{
  //mouse movement
    const tempBox= page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await tempBox.scrollIntoViewIfNeeded()
    const box = await tempBox.boundingBox()
    const x = box.x + box.width / 2
    const y = box.y + box.height / 2
    await page.mouse.move(x, y)
    await page.mouse.down()
    await page.mouse.move(x + 100, y) 
    await page.mouse.move(x + 100, y + 100)
    await page.mouse.up()
    await page.mouse.down()
    await page.mouse.move(x +100, y- 100) 
    await page.mouse.move(x -200, y- 100)
    await page.mouse.move(x -200, y+ 200)
    await page.mouse.up()
    await expect(tempBox).toHaveText('12  Celsius')
})

})