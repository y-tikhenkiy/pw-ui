import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class ContactDetails extends BasePage{
    private editContactButton: Locator = this.page.locator("#edit-contact");
    private deleteContactButton: Locator = this.page.locator("#delete");
    private returnToContactListButton: Locator = this.page.locator("#return");

    async gotoEditContact() {
        await this.editContactButton.click();
    }

    async deleteContact() {
        await this.deleteContactButton.click();
    }

    async returnToContactList() {
        await this.returnToContactListButton.click();
    }
}