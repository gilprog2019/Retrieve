import { LightningElement, track } from 'lwc';
import getAccList from '@salesforce/apex/AccountHelper.getAccountList';
export default class AccountListLWCTwo extends LightningElement {
    @track accounts;
    @track error;
    handleLoad() {
        getAccList()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}