import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactListDisplay.getContacts10';

export default class ContactListDisplay extends LightningElement {
    contacts; //html에서 반복하고자하는 배열 또는 리스트

    @wire(getContacts)
    wiredContacts({data, error}){ //함수로 반환할때는 항상 data와 error를 함께 받아야한다.
        if(data){
            this.contacts= data;
            this.error=undefined;
        } else if(error){
            this.error=error;
            this.contacts = undefined;
        }
    }
}