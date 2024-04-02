import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SingUp extends BasePage {
    readonly firstNameInput: Locator = this.page.locator('#firstName');;
    readonly lastNameInput: Locator = this.page.locator('#lastName');;
    readonly emailInput: Locator = this.page.locator('#email');;
    readonly passwordInput: Locator = this.page.locator('#password');;
    readonly submitButton: Locator = this.page.locator('#submit');;
    readonly cancelButton: Locator = this.page.locator('#cancel');;

    async addUser(firstName: string, lastName: string, email: string, password: string,) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}

