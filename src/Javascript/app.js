import {slider} from './slider.js';

import './slider.js';


 class App{
    constructor(){
     this.checkBoxes=document.querySelectorAll('.checkBox');
     this.choicesOption={number:0,isLengthGreatherThanEight:false};
     this.passwordLength;
     this.StrengthBoxesColore;
     this.passwordContent=document.querySelector('#password')
     this.SECURE_LENGTH=8;
     this.BoxePower=document.querySelector('.password-powerBox');
     this.PASS_STRENGTH_OPTCION_FOR_LESS_SECURE={1:'too week',2 :'week',3:'week',4:'medium'};
     this.PASS_STRENGTH_OPTCION_FOR_MORE_SECURE={1:'too week',2 :'week',3:'medium',4:'strong'};
     this.checkBoxesArray=Array.from(this.checkBoxes);
     this.messge=document.createElement('h1');
     this.passwordBgColor=Array.from(this.BoxePower.querySelectorAll(' li'));
     this.userChoice;
     this.copiedMessg=document.querySelector('.copyPssMsg')
     this.CopyIcon=document.querySelector('.header__copiIcon');
     this.mainFooter=document.querySelector('.main__footer');
     // EVENT LISTENER
     this.CopyIcon.addEventListener('click',this.copyPasswordToClipboard.bind(this));
    this.checkBoxes.forEach(function(element){
    element.addEventListener('click',function(e){
    myApp.selectChoice(e.target);
   
  })})
    }
  // METHODES
  
   selectChoice(element){
    element.classList.toggle('colorizeChoiceBox'); 
    //   now i need to update the length of how many choice do i have
    this.userChoice=this.checkBoxesArray.filter(v=>v.classList.contains('colorizeChoiceBox'))
    this.choicesOption.number=this.userChoice.length;
  //   now we also need to check the label for how we many charectere we have(password length prefered by the user)
    this.passwordLength= slider.label.textContent;
    // update the user choices depending on user selection
    this.choicesOption.isLengthGreatherThanEight= this.passwordLength > this.SECURE_LENGTH ? true:false;
    this.getPasswordPower();
  }
  
   getPasswordPower(){
    if(!this.choicesOption.isLengthGreatherThanEight){
        let STRENGTH_LESS_SECURE= this.PASS_STRENGTH_OPTCION_FOR_LESS_SECURE[ `${this.choicesOption.number}`];
        // we need to show the message to user
        this.showUserMessage(STRENGTH_LESS_SECURE);
        // now we need to choose how many boxes should be colorized 
         this.colorizeChoiceBoxDependOnPassworedPower(STRENGTH_LESS_SECURE);
      }
      else {
        let STRENGTH_MORE_SECURE= this.PASS_STRENGTH_OPTCION_FOR_MORE_SECURE[ `${this.choicesOption.number}`];
        // let keyForMoreThanEight=getKeyByValue(passwordStrengthOptionsForLengthMoreThanEight, strengthForLenghtMoreThanEight);
        this.showUserMessage(STRENGTH_MORE_SECURE);
        // now we need to choose how many boxes should be colorized 
        this.colorizeChoiceBoxDependOnPassworedPower(STRENGTH_MORE_SECURE)
      }
  }
  
  // this function responsible for getting the strength of the choisen password options and show it to the user
  showUserMessage(value='select choice'){
    this.userChoiceStrength(value);
    this.messge.textContent=`${value}`;
    this.mainFooter.append(this.messge);
    this.messge.classList.add('message');
    this.BoxePower.insertAdjacentElement('beforebegin',this.messge);
  }
  
  // function to check if user select choice or not 
  userChoiceStrength(value){
    if( value=='select choice' ){
       this.messge.style.color='red';
       this.hideElementAfterSomeTime(this.messge,2000);
     } 
      else{
         this.messge.style.color='white'
        this.messge.style.display='block';
     }
  }
  
  // colorize the boxes with the color representing the power of the selected password choices
   colorizeChoiceBoxDependOnPassworedPower(passStrength){
    // lets get the element to be colorized
     this.StrengthBoxesColore=this.passwordBgColor.slice(0,this.choicesOption.number);
    // lets make bg transparent from all element not to be clorized
    this.passwordBgColor.forEach(element=>{
      if (!this.StrengthBoxesColore.includes(element))  element.className='passBgPower';
     })
      //  add color for bg depending on password strength
    this.StrengthBoxesColore.forEach((element)=>{
       element.className= `passBgPower pass-${passStrength.replace(/\s+/g,'')}`;
    })
  }
  
  // function responsible for copying password to clipboard
  copyPasswordToClipboard() {
    if(this.passwordContent.textContent=='P4$5W0rD!')return;
     this.copiedMessg.style.display='block';
     // Copy the text inside the text field
    navigator.clipboard.writeText(this.passwordContent.textContent);
    // hide the message after 2 sec
   this.hideElementAfterSomeTime(this.copiedMessg,2000);
  
  }
  
   hideElementAfterSomeTime(element,timing){
    return setTimeout(function(){ element.style.display='none',timing})
  }
  getLength(){
    return   this.passwordLength=slider.label.textContent;
   
   }
  }
  
  export let myApp=new App();
  
  
  
  
  