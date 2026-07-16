import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker"
import {test} from "../test-options";


test.describe('suite1', () =>{

test('using the grid parameterised for inline form', async({formLayoutsPage, pagemanager}) =>{
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(" ","")}${faker.number.int(10)}@test.com`
  await pagemanager.onInlineFormPage().submitInlineForm(randomFullName, randomEmail, true)
})

})