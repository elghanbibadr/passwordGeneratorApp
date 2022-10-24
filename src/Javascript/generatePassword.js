import {passwordContent,passwordLength,getLength,userChoice} from './main.js';

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
       userChoice.forEach(choice=>{
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
    getLength();
    if ((!userChoice && passwordLength==0) || (passwordLength==0) ){
      passwordContent.textContent=''
      alert('Please make sure that length is at least 1');
      return;
    }
    // we assuming that the user hasn't enetered anything of choice yet
    passwordContent.style.color='white'
    if (!userChoice){
     passwordContent.textContent=this.generateRandomString(passwordLength);
  
    }else{
      // now lets handle when user select somthing
      passwordContent.textContent=this.generateRandomString(passwordLength,true);
    }
   }
}



let generateMyPassword=new GeneratePassword();

   
  console.log(generateMyPassword)
// export { GeneratePasswordForUser};
  












// //Local varieble of this module
// let GeneratePasswordBtn=document.querySelector('.generateBtn');
// let passwordOptions={
//     uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     lowercase:'abcdefghijklmnopqrstuvwxyz',
//     number:'0123456789',
//     symbols:'ŽŠ/.<#&éè-çàç)=$ù!°*€'
//   } ;
