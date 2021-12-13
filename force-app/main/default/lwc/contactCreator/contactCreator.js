import { LightningElement } from 'lwc';
import ShowToastEvent from 'lightning/platformShowToastEvent';
import objName1 from '@salesforce/schema/contact';
import firstName from '@salesforce/schema/contact.FirstName';
import lastName from '@salesforce/schema/contact.LastName';
import email from '@salesforce/schema/contact.Email';

export default class ContactCreator extends LightningElement {
    objName = objName1;
    conFields = [firstName, lastName, email];

    handleSuccess(event){
        const toast = new ShowToastEvent({
            title : 'Contact created',
            message : 'Contact ID is'+event.detail.id,
            variant : 'success'
        });

        this.dispatchEvent(toast);
    }
} 