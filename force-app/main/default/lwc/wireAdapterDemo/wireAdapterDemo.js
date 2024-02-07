import { LightningElement,api,wire } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

const FIELDS=[
    'Account.Name',
    'Account.Phone',
]
export default class WireAdapterDemo extends LightningElement {
    @api recordId;

    //객체로 참조 방법 import 없이
    //@wire(getRecord, {recordId:'$recordId', fields:['Account.Name', 'Account.Phone']})
    //@wire(getRecord, {recordId:'$recordId', fields: FIELDS})

    @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD, PHONE_FIELD]})
    record;

    get name() {
        return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : '';
    }
    get phone() {
        return this.record.data ? getFieldValue(this.record.data, PHONE_FIELD) : '';
    }

}