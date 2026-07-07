import { Page } from 'playwright';


export class NavigationPage {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async formLayout() {
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
    }

    async datepicker() {
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async smartTable() {
        await this.selectGroupMenuItem('Tables & data')
        await this.page.getByText('Smart Table').click()
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async toolTip() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('ToolTip').click()
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedState == 'false') {
            await groupMenuItem.click();
        }
    }


} 