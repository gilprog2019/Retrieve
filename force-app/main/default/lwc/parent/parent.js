import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    msg;
    handleCustomEvent(event) {
        const textVal = event.detail;
        this.msg = textVal;
    }    
}