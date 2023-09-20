import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class BuscaContatos extends LightningElement {
    contacts;
    errors;

    handleLoad(){
        getContactList()
            .then((result) => {
                this.contacts = result;
                this.errors = undefined;
            })
            .catch((error) => {
                this.errors = error;
                this.contacts = undefined;
            });
    }
}