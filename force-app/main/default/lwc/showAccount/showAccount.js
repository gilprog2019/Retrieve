import { LightningElement, api } from 'lwc';

export default class ShowAccount extends LightningElement {
    @api strRecordId;
    arrayFields = ['Name', 'AccountNumber', 'Phone', 'Type', 'Website'];
}