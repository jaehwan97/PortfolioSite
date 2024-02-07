import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    firstName= '';
    lastName= '';

    handleChange(event) {
        const field = event.target.name;
        if(field ==='fname'){
            this.firstName=event.target.value;
        } else if(field ==='lname') {
            this.lastName=event.target.value; 
        }
    }
    get uppercasedFullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase(); //변수를 넣어 사용할때 `` 백틱
    }
}