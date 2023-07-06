let fno,operator,sno,a,b;



let container = document.getElementById('container');
let dis = document.getElementById('dis');

// let seven = document.getElementById('7');
// let eight = document.getElementById('8');
// let nine = document.getElementById('9');
// let four = document.getElementById('4');
// let five = document.getElementById('5');
// let six = document.getElementById('6');
// let one = document.getElementById('1');
// let two = document.getElementById('2');
// let three = document.getElementById('3');
// let zero = document.getElementById('0');
// let mul = document.getElementById('X');
// let div = document.getElementById('/');
// let add = document.getElementById('+');
// let sub = document.getElementById('-');
// let dot = document.getElementById('.');
// let equal = document.getElementById('=');

function seven(){
    dis.innerText=dis.innerText+'7';
}
function eight(){
    dis.innerText=dis.innerText+'8';
}
function nine(){
    dis.innerText=dis.innerText+'9';
}
function four(){
    dis.innerText=dis.innerText+'4';
}
function five(){
    dis.innerText=dis.innerText+'5';
}
function six(){
    dis.innerText=dis.innerText+'6';
}
function one(){
    dis.innerText=dis.innerText+'1';
}
function two(){
    dis.innerText=dis.innerText+'2';
}
function three(){
    dis.innerText=dis.innerText+'3';
}
function add1(){
    dis.innerText=dis.innerText+'+';
}
function sub1(){
    dis.innerText=dis.innerText+'-';
}
function mul1(){
    dis.innerText=dis.innerText+'*';
}
function div1(){
    dis.innerText=dis.innerText+'/';
}
function point1(){
    dis.innerText=dis.innerText+'.';
}
function zero(){
    dis.innerText=dis.innerText+'0';
}
function clearDisplay(){
    dis.innerText=" ";
}



let ans;





function equalsto() {
    let query = dis.innerText;
    let numbers = query.split(/[-+*/]/).map(parseFloat);
  
    if (numbers.length === 2) {
      fno = numbers[0];
      sno = numbers[1];
      operator = query.match(/[-+*/]/)[0];
  
      let ans;
  
      switch (operator) {
        case '+':
          ans = Add(fno, sno);
          break;
        case '-':
          ans = Sub(fno, sno);
          break;
        case '*':
          ans = Multiply(fno, sno);
          break;
        case '/':
          ans = Divide(fno, sno);
          break;
        default:
          break;
      }
      dis.innerText=ans;
    //   console.log(ans);
    }
  }

function Add (a,b){
    return  a+b;
    
}
function Sub (a,b){
    return a-b;
}
function Multiply (a,b){
    return a*b;
}
function Divide (a,b){
    return a/b;
}

function operate(operator , a, b){

}