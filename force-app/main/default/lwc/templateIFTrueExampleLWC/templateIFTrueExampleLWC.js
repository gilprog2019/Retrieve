import { LightningElement } from 'lwc';
export default class TemplateIFTrueExampleLWC extends LightningElement {
    areDetailsVisible = false;
    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
}