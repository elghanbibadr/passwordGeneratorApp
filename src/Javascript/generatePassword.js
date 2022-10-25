import {myApp} from './app.js';

class GeneratePassword{
    constructor(){
        this.GeneratePasswordBtn=document.querySelector('.generateBtn');
        this.passwordOptions={
            uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase:'abcdefghijklmnopqrstuvwxyz',
            number:'0123456789',
            symbols:'ŽŠ/.<#&éè-çàç)=$ù!°*€'
          } ;
    this.GeneratePasswordBtn.addEventListener('click',this.GeneratePasswordForUser.bind(this))
    }

    // methodes
      // Generate Random String of a specified length
   generateRandomString(length,userSelectSomething) {
    let character=this.passwordOptions.lowercase;
  
     if (userSelectSomething){
       myApp.userChoice.forEach(choice=>{
      let attributeName=choice.getAttribute('data-type');
      character+=`${this.passwordOptions[`${attributeName}`]}` ;
   
     })
    }
      let result = ' ';
      const charactersLength = character.length;
      for ( let i = 0; i < +length; i++ ) {
          result += character.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

// function that takes user prefrencies and generate a random password accordingly
   GeneratePasswordForUser(){ 
    myApp.getLength();
    if ((!myApp.userChoice && myApp.passwordLength==0) || (myApp.passwordLength==0) ){
      myApp.passwordContent.textContent=''
      alert('Please make sure that length is at least 1');
      return;
    }
    // we assuming that the user hasn't enetered anything of choice yet
    myApp.passwordContent.style.color='white'
    if (!myApp.userChoice){
     myApp.passwordContent.textContent=this.generateRandomString(myApp.passwordLength);
  
    }else{
      // now lets handle when user select somthing
      myApp.passwordContent.textContent=this.generateRandomString(myApp.passwordLength,true);
    }
   }
}


let generateMyPassword=new GeneratePassword();













// //Local varieble of this module
// let GeneratePasswordBtn=document.querySelector('.generateBtn');
// let passwordOptions={
//     uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     lowercase:'abcdefghijklmnopqrstuvwxyz',
//     number:'0123456789',
//     symbols:'ŽŠ/.<#&éè-çàç)=$ù!°*€'
//   } ;
