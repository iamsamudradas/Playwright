import { Page } from 'playwright';


export class NavigationPage {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async formLayout() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layouts').click()
    }
} 