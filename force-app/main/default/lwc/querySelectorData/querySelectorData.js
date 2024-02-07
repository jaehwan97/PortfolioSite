import { LightningElement } from 'lwc';

export default class QuerySelectorData extends LightningElement {
    greeting = 'Sanjay';

    handleClick() {
        this.greeting = this.template.querySelector("lightning-input").value;
    }
}