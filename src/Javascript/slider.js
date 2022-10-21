
 class Slider{
     constructor(){
         this.input=document.querySelector('#slider');
         this.label=document.querySelector('#Slidevariable');
         this.input.addEventListener('input',this.intialieValue.bind(this));
     }

     intialieValue(){
       return   this.label.innerHTML=this.input.value;
     }
  
 }

 export let slider=new Slider();


