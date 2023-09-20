import { LightningElement } from 'lwc';

export default class ParentComponentTwo extends LightningElement {
    msg;
  
    constructor() {
        super();   
        this.template.addEventListener('mycustomevent', this.handleCustomEvent.bind(this));
    }
    
    handleCustomEvent(event) {
        const textVal = event.detail;
        this.msg = textVal;
    }
}