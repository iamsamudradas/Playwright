import {Page, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import { FormLayoutsPage, inLineFormPage } from "../page-objects/formLayoutsPage";

export class pageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutsPage: FormLayoutsPage;
  private readonly inlineFormPage: inLineFormPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
    this.inlineFormPage = new inLineFormPage(this.page);
  }

  navigateTo(){
    return this.navigationPage;
  }

  onFormLayoutsPage(){
    return this.formLayoutsPage;
  }

    onInlineFormPage(){
    return this.inlineFormPage;
    }
}