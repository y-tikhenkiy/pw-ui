import { BasePage } from "./pages/base.page";
import { SignIn } from "./pages/signIn.page";
import { SignUp } from "./pages/signUp.page";


export class Application extends BasePage {

    public signUp = new SignUp(this.page);
    public signIn = new SignIn(this.page);
}