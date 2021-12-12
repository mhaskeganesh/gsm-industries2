import {LightningElement} from 'lwc';
import STUDENT__C_OBJECT from '@salesforce/schema/Student__C';
import STUDENT__C_ID from '@salesforce/schema/Student__C.Id';
import STUDENT__C_Name from '@salesforce/schema/Student__C.Name';
import Teacher from '@salesforce/schema/Student__C.Teacher__c';

export default class DisplayStudents extends LightningElement{
student = STUDENT__C_OBJECT;
stuFields = [STUDENT__C_ID, STUDENT__C_Name];

handleSuccess(event){
alert('Record got created successfully...ID : '+event.detail.Id);
}


}