import {test as base} from "@playwright/test";
import { pageManager } from "../pw-practice-app/page-objects/pageManager"

export type testOptions ={
    globalsQaURL: string
    formLayoutsPage: string
    pagemanager: pageManager
}

export const test = base.extend<testOptions>({
    globalsQaURL: ['',{option: true}],
    formLayoutsPage : async({page}: {page: any}, use) =>{
        await page.goto('/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
    }, 

    pagemanager: async({page}:{page: any}, use) =>{
        const pm = new pageManager(page);
        await use(pm)
    }
})
