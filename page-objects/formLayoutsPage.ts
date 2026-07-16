import { Locator, Page } from 'playwright';
import { HelperBase } from './helperBase';


export class FormLayoutsPage extends HelperBase {

constructor(page: Page) {
    super(page);
}

async submitUsingThegrid(email: string, password: string, Option: string) {
const emailInput = await this.page.locator('nb-card', {hasText:"Using the Grid"})
await emailInput.getByRole('textbox', {name:"Email"}).fill(email)
await emailInput.getByRole('textbox', {name:"Password"}).fill(password)
await emailInput.getByRole("radio",{name:Option}).check({force:true})
await emailInput.getByRole('button', {name:"Sign in"}).click()
}

}

export class inLineFormPage {

private readonly page: Page;

constructor(page: Page) {
    this.page = page;
}

async submitInlineForm(name: string, email: string, rememberMe: boolean) {
const emailInlineInput = this.page.locator('nb-card', {hasText:"Inline Form"})
await emailInlineInput.getByRole('textbox', {name:"Jane Doe"}).fill(name)
await emailInlineInput.getByRole('textbox', {name:"Email"}).fill(email)
if(rememberMe == true){
    await emailInlineInput.getByRole('checkbox', {name:"Remember me"}).check({force:true})
}
await emailInlineInput.getByRole('button', {name:"Submit"}).click()
}}