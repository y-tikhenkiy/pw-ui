import { expect, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { faker, th } from "@faker-js/faker";

export class AddContact extends BasePage{
    private firstNameInput: Locator = this.page.locator("#firstName");
    private lastNameInput: Locator = this.page.locator("#lastName");
    private birtdayInput: Locator = this.page.locator("#birthdate");
    private emailInput: Locator = this.page.locator("#email");
    private phoneInput: Locator = this.page.locator("#phone");
    private street1Input: Locator = this.page.locator("#street1");
    private street2Input: Locator = this.page.locator("#street2");
    private cityInput: Locator = this.page.locator("#city");
    private stateProvinceInput: Locator = this.page.locator("#stateProvince");
    private postalCodeInput: Locator = this.page.locator("#postalCode");
    private countryInput: Locator = this.page.locator("#country");
    private submitButton: Locator = this.page.locator("#submit");

    async expectLoaded() {
        await expect(this.firstNameInput, 'Expected Add Contact page to be opened').toBeVisible();
        await expect(this.lastNameInput, 'Expected Add Contact page to be opened').toBeVisible();
    }

    async fillFullNameFields() {
        await this.firstNameInput.fill(faker.person.firstName(), {timeout:1000});
        await this.lastNameInput.fill(faker.person.lastName());
    }
  
    async fillBirtdayField() {
        await this.birtdayInput.fill(`${faker.date.birthdate().getFullYear()}-${faker.date.birthdate().getMonth()}-${faker.date.birthdate().getDay()}`)
    }
    async fillEmailField() {
        await this.emailInput.fill(faker.internet.email({provider: 'example.contacts.io'}));
    }
    async fillPhoneField() {
        await this.phoneInput.fill(faker.phone.number());

    }
    async fillStreet1Field() {
        await this.street1Input.fill(faker.location.streetAddress());

    }
    async fillStreet2Field() {
        await this.street2Input.fill(faker.location.streetAddress());
    }
    async fillCityField() {
        await this.cityInput.fill(faker.location.city());

    }
    async fillStateProvinceField() {
        await this.stateProvinceInput.fill(faker.location.state());
    }
    async fillPostalCodeField() {
        await this.postalCodeInput.fill(faker.location.zipCode('#####'))
    }
    async fillCountryField() {
        await this.countryInput.fill(faker.location.country())
    }

    async submitNewContactForm() {
        await this.submitButton.click();
    }

    async fillAndSubmitContactForm(){
        await this.expectLoaded();
        
        await this.fillFullNameFields();
        await this.page.waitForTimeout(2000);
        // await this.fillBirtdayField();
        // await this.fillEmailField();
        // await this.fillPhoneField();
        // await this.fillStreet1Field();
        // await this.fillStreet2Field();
        // await this.fillCityField();
        // await this.fillStateProvinceField();
        // await this.fillStateProvinceField();
        // await this.fillPostalCodeField();
        // await this.fillPostalCodeField();
        // await this.fillCountryField();
        await this.submitNewContactForm();
    }
}