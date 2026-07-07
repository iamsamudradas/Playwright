import { Locator, Page } from 'playwright';


export class NavigationPage {

    readonly page: Page;
    readonly formLayoutsMenuItem : Locator
    readonly datepickerMenuItem : Locator
    readonly smartTableMenuItem : Locator
    readonly toastrMenuItem : Locator
    readonly tooltipMenuItem : Locator

    constructor(page: Page) {
        this.page = page;
        this.formLayoutsMenuItem = page.getByText('Form Layouts');
        this.datepickerMenuItem = page.getByText('Datepicker');
        this.smartTableMenuItem = page.getByText('Smart Table');
        this.toastrMenuItem = page.getByText('Toastr');
        this.tooltipMenuItem = page.getByText('ToolTip');
    }
    async formLayout() {
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click()
    }

    async datepicker() {
        await this.selectGroupMenuItem('Forms')
        await this.datepickerMenuItem.click()
    }

    async smartTable() {
        await this.selectGroupMenuItem('Tables & data')
        await this.smartTableMenuItem.click()
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()
    }

    async toolTip() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedState == 'false') {
            await groupMenuItem.click();
        }
    }


} 