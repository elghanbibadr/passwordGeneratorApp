
import './slider.js';
import {slider} from './slider.js';

// VARIABELS
let checkBoxes=document.querySelectorAll('.checkBox');
let choicesOption={number:0,isLengthGreatherThanEight:false};
let passwordLength
let StrengthBoxesColore;
let passwordContent=document.querySelector('#password')
let SECURE_LENGTH=8;
let BoxesPower=document.querySelector('.password-powerBox');
let PASS_STRENGTH_OPTCION_FOR_LESS_SECURE={1:'too week',2 :'week',3:'week',4:'medium'};
let PASS_STRENGTH_OPTCION_FOR_MORE_SECURE={1:'too week',2 :'week',3:'medium',4:'strong'};
let checkBoxesArray=Array.from(checkBoxes);
let passwordBgColor=Array.from(BoxesPower.querySelectorAll(' li'));
let messge=document.createElement('h1');
let userChoice=[];
let passwordOptions={
  uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase:'abcdefghijklmnopqrstuvwxyz',
  number:'0123456789',
  symbols:'ŽŠ/.<#&éè-çàç)=$ù!°*€'
} ;
let GeneratePasswordBtn=document.querySelector('.generateBtn');
let mainFooter=document.querySelector('.main__footer');
// EVENT LISTENER

checkBoxes.forEach(element=>element.addEventListener('click',(e)=>selectChoice(e.target)))
GeneratePasswordBtn.addEventListener('click',GeneratePasswordBtnForUser)
// FUNCTIONS
function selectChoice(element){
  element.classList.toggle('colorizeChoiceBox'); 
  userChoice.push(element);
  //   now i need to update the length of how many choice do i have
  choicesOption.number=checkBoxesArray.filter(v=>v.classList.contains('colorizeChoiceBox')).length;
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

// function to check if user select or not 

function userChoiceStrength(value){
  if( value=='select choice' ){
    messge.style.color='red';
    setTimeout(()=>messge.style.display='none',2000);
   } 
    else{
     messge.style.color='white';
     messge.style.display='block';
   }
}


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

// function that takes user prefrencies and generate a random password accordingly
function GeneratePasswordBtnForUser(){ 
  passwordLength=slider.label.textContent;
  if ((!StrengthBoxesColore && passwordLength==0) || (passwordLength==0) ){
    passwordContent.textContent=''
    alert('Please make sure that length is at least 1');
    return;
  }
  // we assuming that the user hasn't enetered anything of choice yet
  if (!StrengthBoxesColore){
   passwordContent.textContent=generateString(passwordLength);
   passwordContent.style.color='white'

  }
  
  
  // now lets handle when user select somthing
   if (StrengthBoxesColore){
    passwordContent.textContent=generateString(passwordLength,true);
    passwordContent.style.color='white';
  
   }
 
  
 }
 


// program to generate random strings

// declare all characters

function generateString(length,userSelectSomething) {
 
  let {lowercase}=passwordOptions;
  let character=lowercase;

   if (!userSelectSomething){
      // character+=lowercase;
      console.log(character)
   } else{
      userChoice.forEach(choice=>{
     let attributeName=choice.getAttribute('data-type');
     character+=`${passwordOptions[`${attributeName}`]}` ;
     console.log(character)
    })
   }
   
    let result = ' ';
    const charactersLength = character.length;
    for ( let i = 0; i < +length; i++ ) {
        result += character.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


