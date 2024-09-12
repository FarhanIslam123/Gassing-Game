//finding html element 
const container =document.querySelector('.container') ;
const form =document.querySelector('form') ;
const input =form.querySelector('input') ;
const btn = form.querySelector('button');
const p1 =document.querySelector('.rightResult');
const p2 =document.querySelector('.attempt') ;
// all count
var count=0;
var count1=0;
var atteptCount=5;

//creat html element 
var p3=document.createElement('p');

//adding listener 
btn.addEventListener('click',(e)=>{
  e.preventDefault();
 
   if (!form.checkValidity()) {
    form.reportValidity();
    return 
  }
  atteptCount--;
  if (atteptCount<0) {
    input.disabled=true;
    btn.disabled=true;
    alert('you was over you limit! if you play again refresh now.')
  } else {
    p2.innerHTML=`remaining attempts: ${atteptCount}`;
  
//create random number and match user number 
  const randomNumber =Math.floor(Math.random()*5+1);
  const userInput = parseInt(input.value);
  if (randomNumber==userInput) {
    count++;
    p1.innerHTML=`you have won`;
      }
  else {
    count1++;
    p1.innerHTML=`you have lost,random number was:${randomNumber}`;
      }
        //adding httml element 
  p3.innerText=`won:${count}, lost:${count1}`
  p3.classList.add('large');
  document.querySelector('.forResult').appendChild(p3);
  input.value='';
  }
})

