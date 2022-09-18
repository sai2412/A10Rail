console.log('Runnnnnnnnnnn');
function updateClock(){
    var now = new Date();
    var hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";
        
        if(hou >= 12){
          pe = "PM";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }

  function myFunction() {
    window.location.href = 'login.html';
}
//   function Myfunction2(){
//     window.location.href = 'index.html';
// }
let click=document.getElementById('btn');

click.addEventListener('click',function alertfunction() {
  // alert("You Logged in sucessfully!!");
  window.location.href = 'index.html';
  let changelog=document.getElementsByClassName("btn");
  changelog.innerHTML="Name";
  return 0;
})
// function alertfunction() {
//   // window.location.href = 'index.html';
//   alert("You Logged in sucessfully!!");
// }

// let changelog=document.getElementsByClassName('btn');
// changelog.addEventListener('click',function change() {
//   changelog.innerTEXT='NAME';
// })
  