import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    areDetailsVisible=false;

    handleChange(event){
        this.areDetailsVisible=event.target.checked;
    }
}