import { Locator, Page } from "@playwright/test";
import { SingUp } from "./signUp";
import { getAuthData } from "../../utils";

export class SignIn {
readonly page: Page;
readonly signUpButton: Locator;
readonly submitButton: Locator;


constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.locator('#signup');
    this.submitButton = page.locator('#submit');
    
}

async navigateToLogIn(link: string){
    return this.page.goto(link).catch((e) => this.errorHandling(e, this.page));
}

async login(){
    const authData = getAuthData();

    await this.page.getByPlaceholder('Email').fill(authData.email);
    await this.page.getByPlaceholder('Password').fill(authData.password);
    await this.submitButton.click();    
}

async clickSignUpButton() {
    await this.signUpButton.click();
    return new SingUp(this.page);
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