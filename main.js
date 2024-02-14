let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function excuseFunction() {
  
  let whoRandom = Math.floor(Math.random()*3);
  let actionRandom = Math.floor(Math.random()*3);
  let whatRandom = Math.floor(Math.random()*2);
  let whenRandom = Math.floor(Math.random()*4);

  

  let excuseString = [who[whoRandom],action[actionRandom],what[whatRandom],when[whenRandom]].join(' ');
  document.getElementById("myExcuse").innerHTML = excuseString;
  

}






  