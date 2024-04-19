import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";


export class ContactList extends BasePage{
    private addNewContactButton: Locator = this.page.locator("#add-contact");
    private logoutButton: Locator = this.page.locator("#logout");
    private contactListTable: Locator = this.page.locator("#myTable")
    private contactNameFromTamble: Locator = this.page.locator("//table[@id='myTable']/tr[last()]/td[2]")

    async expectLoaded() {
      await expect(this.contactListTable, 'Expected Contact List page to be opened').toBeVisible();
  }

    async addNewContact(){
         // await this.expectLoaded();
         await this.addNewContactButton.click();
     }
     async clickOnLastAddedContactName() {
         await this.contactNameFromTamble.click();
     }
     async logout(){
         await this.logoutButton.click();
     }   
}