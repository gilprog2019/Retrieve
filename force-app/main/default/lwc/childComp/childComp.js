import { LightningElement,api } from 'lwc';

export default class ChildComp extends LightningElement {
    Message;
    @api
    changeMessage(strString) {
         this.Message = strString.toUpperCase();
    }
}