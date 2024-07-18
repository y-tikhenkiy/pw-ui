import { Locator, Page } from "@playwright/test";
import { SignUp } from "./signUp.page";
import { getAuthData } from "../../utils";
import { BasePage } from "./base.page";

export class SignIn extends BasePage {

private signUpButton: Locator = this.page.locator('#signup');
private submitButton: Locator = this.page.locator('#submit');

async navigateToLogIn(link: string){
    return this.page.goto(link).catch((e) => this.errorHandling(e, this.page));
}

async login(){
    const authData = getAuthData();

    // await this.page.getByPlaceholder('Email').fill(authData.email);
    // await this.page.getByPlaceholder('Password').fill(authData.password);
    await this.submitButton.click();    
}

async clickSignUpButton() {
    await this.signUpButton.click();
    return new SignUp(this.page);
}

errorHandling(error: Error, page: Page) {
    const exceptionMessage = new Error(`
============  ============  TEST FAILED ============  ============
Test execution fails on Page with URL: ${page.url()}
ERROR TYPE: ${error.name}
MESSAGE: ${error.message}

STACK TRACE: ${error.stack}
============  ============  ============ ============  ============`);

    throw exceptionMessage;
  }

}