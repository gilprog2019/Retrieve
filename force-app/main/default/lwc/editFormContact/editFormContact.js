import { LightningElement } from 'lwc';
 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class Test_Component extends LightningElement {
 
    value = '';
 
    get options() {
        return [
            { label: 'United Kingdom', value: 'United Kingdom' },
            { label: 'United States', value: 'United States' },
            { label: 'India', value: 'India' },
        ];
    }
     
    handle_Country_Change(event){
        var selected_Value = event.detail.value;
        console.log('-=-=: '+selected_Value);
    }
 
    handle_Record_Submit(event){
        event.preventDefault();
        const fields = event.detail.fields;
 
        // Validating a lightning-combobox field 
        // you can change it to lightning-input or lightning-rick-text or lightnig-name or lightinig-address etc.
        // here in this example lightining-combobox is a required field.
        // since lightning-record-edit-form only validates lightning-input-field tag.
        // to validate lightning-combobox (all lightning-combobox) tag in the form.
 
        const All_Compobox_Valid = [...this.template.querySelectorAll('lightning-combobox')]
            .reduce((validSoFar, input_Field_Reference) => {
                input_Field_Reference.reportValidity();
                return validSoFar && input_Field_Reference.checkValidity();
            }, true);
 
        if(All_Compobox_Valid){
            // This means all required fields or other validations on combobox fields are entered correctly.
            // you can assign country valie to any field using the fields constant that is assigned above.
            // once assighed submit the lightning-record-edit-form with fields.
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        else{
            // show toast error message if required
            /*
            const event = new ShowToastEvent({
                title : 'Error',
                message : 'Please select country.',
                variant : 'error'
            });
            this.dispatchEvent(event);
            */
        }
    }
 
    handle_Record_Success(event){
        console.log('Record Id: '+event.detail.id);
    }
     
}