import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}
}
