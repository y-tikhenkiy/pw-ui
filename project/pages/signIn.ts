import { Locator, Page } from "@playwright/test";
import { SingUp } from "./signUp";

export class SignIn {
readonly page: Page;
readonly signUpButton: Locator;


constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.locator('#signup');
    
}

async navigateToLogIn(link: string){
    return this.page.goto(link).catch((e) => this.errorHandling(e, this.page));
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