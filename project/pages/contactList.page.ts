import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";


export class ContactList extends BasePage{
    private addNewContactButton: Locator = this.page.locator("#add-contact");
    private logoutButton: Locator = this.page.locator("#logout");

    async addNewContact(){
        await this.addNewContactButton.click();
     }
     async logout(){
        await this.logoutButton.click();
     }   
}