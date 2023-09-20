import { LightningElement, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditFormEditExampleLWC extends LightningElement {
    @api recordId;
    handleSubmit(event) {
        //showSuccessToast();
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
        
    }
    handleSuccess(event) {
        console.log('inicio do metodo success')
        console.log('onsuccex event recordEditForm', event.detail.id);
        
        const evt = new ShowToastEvent({
            title: 'Success!',
            message: 'Record {0} created! See it {1}!',
            messageData: [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'here',
                },
            ],
        });
        this.dispatchEvent(evt);
        
        console.log('fim do metodo success')
        
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'registro cadastrado com sucesso',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}