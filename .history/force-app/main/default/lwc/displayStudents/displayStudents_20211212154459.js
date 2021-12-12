import {LightningElement} from 'lwc';
import ob from '@salesforce/schema/Student__C';
import i from '@salesforce/schema/Student__C.Id';
import sname from '@salesforce/schema/Student__C.Name';
import t from '@salesforce/schema/Student__C.Teacher__c';

export default class DisplayStudents extends LightningElement{
student = ob;
stuFields = [ sname, t];

handleSuccess(event){
alert('Record got created successfully...ID : '+event.detail.Id);
}


}