import { test, expect } from '@playwright/test';

test.only('should add contact via API', async ({request}) =>{
    const getContact = await request.get(`https://thinking-tester-contact-list.herokuapp.com/contacts/65fca9210e404b0013989409`);
    const contactData = await getContact.json();
    console.log(contactData);
    expect(getContact.ok()).toBeTruthy();
  })