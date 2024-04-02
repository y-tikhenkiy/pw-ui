import { test, expect } from '@playwright/test';

test.only('should get contact via API', async ({request}) =>{
    const getContact = await request.get(`/contacts/`, {
      params:{
        _id: '660074c35ebacf00135d7de8'
      }
    });
    const contactData = await getContact.json();
    console.log(contactData);
    expect(getContact.ok()).toBeTruthy();
  })