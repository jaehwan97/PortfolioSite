import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {
    snackbarMessage;

    @api
    showSnackBar() {
        // Get the snackbar DIV
        //var x = document.getElementById("snackbar"); //class선택기로 바꿈
        const snackbar = this.template.querySelector('.snackbar');
        // Add the "show" class to DIV
        this.snackbarMessage = message; 
        snackbar.classList.add('show');
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.classList.remove('show'); }, 2800);
      }
}