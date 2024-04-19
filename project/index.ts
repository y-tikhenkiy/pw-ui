import { AddContact } from "./pages/addContact.page";
import { BasePage } from "./pages/base.page";
import { ContactDetails } from "./pages/contactDetails";
import { ContactList } from "./pages/contactList.page";
import { SignIn } from "./pages/signIn.page";
import { SignUp } from "./pages/signUp.page";


export class Application extends BasePage {

    public signUp = new SignUp(this.page);
    public signIn = new SignIn(this.page);
    public contactList = new ContactList(this.page);
    public addContact = new AddContact(this.page);
    public contactDetails = new ContactDetails(this.page);

}