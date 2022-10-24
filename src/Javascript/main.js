
import './slider.js';
import {slider} from './slider.js';
import './generatePassword.js';
// import {GeneratePasswordForUser} from './generatePassword.js';

// VARIABELS
let checkBoxes=document.querySelectorAll('.checkBox');
let choicesOption={number:0,isLengthGreatherThanEight:false};
export let passwordLength;
let StrengthBoxesColore;
export let passwordContent=document.querySelector('#password')
let SECURE_LENGTH=8;
let BoxesPower=document.querySelector('.password-powerBox');
let PASS_STRENGTH_OPTCION_FOR_LESS_SECURE={1:'too week',2 :'week',3:'week',4:'medium'};
let PASS_STRENGTH_OPTCION_FOR_MORE_SECURE={1:'too week',2 :'week',3:'medium',4:'strong'};
let checkBoxesArray=Array.from(checkBoxes);
let passwordBgColor=Array.from(BoxesPower.querySelectorAll(' li'));
let messge=document.createElement('h1');
 export let userChoice;
 let copiedMessg=document.querySelector('.copyPssMsg')
 let CopyIcon=document.querySelector('.header__copiIcon');


// let userChoice;

let mainFooter=document.querySelector('.main__footer');
CopyIcon.addEventListener('click',copyPasswordToClipboard);

export function getLength(){
 return   passwordLength=slider.label.textContent;

}

// EVENT LISTENER
checkBoxes.forEach(element=>element.addEventListener('click',(e)=>selectChoice(e.target)))

// FUNCTIONS
function selectChoice(element){
  element.classList.toggle('colorizeChoiceBox'); 
  //   now i need to update the length of how many choice do i have
  userChoice=checkBoxesArray.filter(v=>v.classList.contains('colorizeChoiceBox'))
  choicesOption.number=userChoice.length;
//   now we also need to check the label for how we many charectere we have(password length prefered by the user)
  passwordLength= slider.label.textContent;
  // update the user choices depending on user selection
  choicesOption.isLengthGreatherThanEight= passwordLength > SECURE_LENGTH ? true:false;
  getPasswordPower();
}

function getPasswordPower(){
  
  if(!choicesOption.isLengthGreatherThanEight){
      let STRENGTH_LESS_SECURE= PASS_STRENGTH_OPTCION_FOR_LESS_SECURE[ `${choicesOption.number}`];
      // we need to show the message to user
      showUserMessage(STRENGTH_LESS_SECURE);
      // now we need to choose how many boxes should be colorized 
       colorizeChoiceBoxDependOnPassworedPower(STRENGTH_LESS_SECURE);
    }
    else {
      let STRENGTH_MORE_SECURE= PASS_STRENGTH_OPTCION_FOR_MORE_SECURE[ `${choicesOption.number}`];
      // let keyForMoreThanEight=getKeyByValue(passwordStrengthOptionsForLengthMoreThanEight, strengthForLenghtMoreThanEight);
      showUserMessage(STRENGTH_MORE_SECURE);
      // now we need to choose how many boxes should be colorized 
       colorizeChoiceBoxDependOnPassworedPower(STRENGTH_MORE_SECURE)
    }
}

// this function responsible for getting the strength of the choisen password options and show it to the user
function showUserMessage(value='select choice'){
  userChoiceStrength(value);
  messge.textContent=`${value}`;
  mainFooter.append(messge);
  messge.classList.add('message');
  BoxesPower.insertAdjacentElement('beforebegin',messge);
}

// function to check if user select choice or not 
function userChoiceStrength(value){
  if( value=='select choice' ){
     messge.style.color='red';
     hideElementAfterSomeTime(messge,2000);
   } 
    else{
       messge.style.color='white'
      messge.style.display='block';
   }
}

// colorize the boxes with the color representing the power of the selected password choices
function colorizeChoiceBoxDependOnPassworedPower(passStrength){
  // lets get the element to be colorized
   StrengthBoxesColore=passwordBgColor.slice(0,choicesOption.number);
  // lets make bg transparent from all element not to be clorized
  passwordBgColor.forEach(element=>{
    if (!StrengthBoxesColore.includes(element))  element.className='passBgPower';
   })
    //  add color for bg depending on password strength
  StrengthBoxesColore.forEach((element)=>{
     element.className= `passBgPower pass-${passStrength.replace(/\s+/g,'')}`;
  })
}



// function responsible for copying password to clipboard
function copyPasswordToClipboard() {
  if(passwordContent.textContent=='P4$5W0rD!')return;
   copiedMessg.style.display='block';
   // Copy the text inside the text field
  navigator.clipboard.writeText(passwordContent.textContent);
  // hide the message after 2 sec
 hideElementAfterSomeTime(copiedMessg,2000);

}

function hideElementAfterSomeTime(element,timing){
  return setTimeout(()=>element.style.display='none',timing)
}

