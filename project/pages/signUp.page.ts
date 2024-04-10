import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SignUp extends BasePage {
    private firstNameInput: Locator = this.page.locator('#firstName');;
    private lastNameInput: Locator = this.page.locator('#lastName');;
    private emailInput: Locator = this.page.locator('#email');;
    private passwordInput: Locator = this.page.locator('#password');;
    private submitButton: Locator = this.page.locator('#submit');;
    private cancelButton: Locator = this.page.locator('#cancel');;

    async addUser(firstName: string, lastName: string, email: string, password: string,) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async clickOnCancel(){
        await this.cancelButton.click();
    }
}

