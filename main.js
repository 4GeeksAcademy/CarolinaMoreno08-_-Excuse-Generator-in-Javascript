let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

var btn = document.getElementById("button1");



function excuseFunction() {
  
  let whoRandom = Math.floor(Math.random()*who.length);
  let actionRandom = Math.floor(Math.random()*action.length);
  let whatRandom = Math.floor(Math.random()*what.length);
  let whenRandom = Math.floor(Math.random()*when.length); 


  let excuseString = [who[whoRandom],action[actionRandom],what[whatRandom],when[whenRandom]].join(' ');
  document.getElementById("myExcuse").innerHTML = excuseString;
  
}

btn.addEventListener("click", function(){
  excuseFunction();
});


  // window.onload=function() {
  //   excuseFunction();
  // };




  