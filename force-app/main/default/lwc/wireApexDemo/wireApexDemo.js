import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireApexDemo extends LightningElement {
    @api recordId;//시스템 변수 =>컴포넌트가 현재 보고 있는 레코드 아이디 값을 가져옴
    contacts;

    @wire(getRecord, {recordId: '$recordId', fields: 'Account.Name'})
    record;

    @wire(getContacts, {accId:'$recordId'})
    wiredContacts({error,data}){
        if(data){
            this.contacts= data;
            this.error=undefined;
        } else if(error){
            this.error=error;
            this.contacts = undefined;
        }
    }

    get name() {
        return this.record.data.fields.Name.value;
    }
}