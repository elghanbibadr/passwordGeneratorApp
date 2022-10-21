
import './slider.js';
 import {slider} from './slider.js';


let checkBoxes=document.querySelectorAll('.checkBox');
let choicesOption={number:0,isLengthGreatherThanEight:false};
 let passwordLength;
 let BoxesPower=document.querySelector('.password-powerBox');
 let passwordStrengthOptions={1:'too week',2 :'week',3:'medium',4:'strong'};
let checkBoxesArray=Array.from(checkBoxes);
let messge=document.createElement('h1');
let mainFooter=document.querySelector('.main__footer');

checkBoxes.forEach(element=>element.addEventListener('click',(e)=>selectChoice(e.target)))

function selectChoice(element){
  element.classList.toggle('colorizeChoiceBox'); 
  //   now i need to update the length of how many choice do i have
  choicesOption.number=checkBoxesArray.filter(v=>v.classList.contains('colorizeChoiceBox')).length;
//   now we also need to check the label for how we many chacrtere we have(password length prefered by the user)
  passwordLength= slider.label.textContent;
  // update the user choices depending on user selection
  choicesOption.isLengthGreatherThanEight= passwordLength >8 ? true:false;
  checkPasswordPower();
//  let appears a message of how the password is strength

}



function checkPasswordPower(){
  let strength= passwordStrengthOptions[ `${choicesOption.number}`];
    if(choicesOption.isLengthGreatherThanEight){
      // we need to show the message to user
      showUserMessage(strength);
    }
    else {
      delete passwordStrengthOptions['4'];
      passwordStrengthOptions['4']="medium";
      showUserMessage(strength);
    }
}



// this function responsible for getting the strength of the choisen password and show it to the user
function showUserMessage(value){
  messge.textContent=`${value}` || 1;
  mainFooter.append(messge);
  BoxesPower.insertAdjacentElement('beforebegin',messge);
}





