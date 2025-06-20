let title = document.getElementById('title');
let message = document.getElementsByClassName('message')[0];
let JavaScriptHtml = document.getElementById('JavaScript-HTML');
let meaning = document.getElementsByClassName('meaning')[0];
let jsMeaning = document.getElementById('js-meaning');
let useage = document.getElementsByClassName('useage')[0];
let checker = document.getElementById('checker');

title.textContent = 'Welcome!'
message.textContent = 'hello!'
JavaScriptHtml.textContent = 1
meaning.textContent = 2
jsMeaning.textContent = 3
useage.textContent = 4



title.style.color = 'blue'
message.style.color = 'green'
JavaScriptHtml.style.color = 'seagreen'
meaning.style.color = 'purple'
jsMeaning.style.color = 'red'
useage.style.color = 'pink'


title.addEventListener('click',function () {
  alert(`Welcome!`)  
});

message.addEventListener('click' , function () {
  alert('hello')
});
JavaScriptHtml.addEventListener('click' , function () {
  alert('1 click')
});
meaning.addEventListener('click' , function (){
  alert(`2 clicks`)
});
jsMeaning.addEventListener('click' , function () {
  alert(`3 clicks!`)
});
useage.addEventListener('click' , function () {
  alert(`4 clicks`)
});
checker.addEventListener('click' , function () {
const submitBox = prompt('enter your clicks').toString()
if (submitBox <= '10') {
  alert('good Job')
} else if (submitBox <= '20') {
  alert(`great job`)
} else if (submitBox <= '30'){
  alert(`cool`)
} else if (submitBox == '') {
  alert('invalid value')
} else {
  alert(`good job!`)
  
};
});

