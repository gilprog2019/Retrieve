import { LightningElement, api } from 'lwc';

export default class GetRecord extends LightningElement {
    //a pagina seta automaticamente com o ID
    @api recordId;
}