let calcDsiplay = document.getElementById('calcDisplay')

let firstNum;

let secondNum;

let operator;


document.getElementById('9').onclick = function(){
    calcDsiplay.innerHTML += "9"
    if(firstNum == null ){
        firstNum = 9;
    }
    else if(firstNum != null && operator == null)
    {
        firstNum += 9;
    }
    else
    {
        secondNum = 9;
    }
    console.log(firstNum);
}
document.getElementById('8').onclick =function(){
    calcDsiplay.innerHTML += "8"
    if(firstNum == null){
        firstNum = 8;
    }
    else
    {
        secondNum = 8;
    }
}
document.getElementById('7').onclick = function(){
    calcDsiplay.innerHTML += "7"
    if(firstNum == null){
        firstNum = 7;
    }
    else
    {
        secondNum = 7;
    }
}
document.getElementById('6').onclick = function(){
    calcDisplay.innerHTML += "6"
    if(firstNum == null){
        firstNum = 6;
    }
    else
    {
        secondNum = 6;
    }
}
document.getElementById('5').onclick = function(){
    calcDisplay.innerHTML += "5"
    if(firstNum == null){
        firstNum = 5;
    }
    else
    {
        secondNum = 5;
    }
}
document.getElementById ('4').onclick =function(){
    calcDisplay.innerHTML += "4"
    if(firstNum == null){
        firstNum = 4;
    }
    else
    {
        secondNum = 4;
    }
}
document.getElementById ('3').onclick =function(){
    calcDisplay.innerHTML += "3"
    if(firstNum == null){
        firstNum = 3;
    }
    else
    {
        secondNum = 3;
    }
}
document.getElementById('2').onclick =function(){
    calcDisplay.innerHTML += "2"
    if(firstNum == null){
        firstNum = 2;
    }
    else
    {
        secondNum = 2;
    }
}
document.getElementById('1').onclick =function(){
    calcDisplay.innerHTML += "1"
    if(firstNum == null){
        firstNum = 1;
    }
    else
    {
        secondNum = 1;
    }
}
document.getElementById('0').onclick =function(){
    calcDisplay.innerHTML += "0"
    if(firstNum == null){
        firstNum = 0;
    }
    else
    {
        secondNum = 0;
    }
}
document.getElementById('plus').onclick = function(){
    calcDisplay.innerHTML += "+"
    operator = "+";
}
document.getElementById('minus').onclick =function(){
    calcDisplay.innerHTML += "-"
    operator = "-";
}
document.getElementById('divide').onclick =function(){
    calcDisplay.innerHTML += "/"
    operator = "/"
}
document.getElementById('multiply').onclick=function(){
    calcDisplay.innerHTML += "*"
    operator = "*"
}
let equals = document.getElementById("equals").onclick=function(){
    calcDisplay.innerHTML +- "="
    myCalc(firstNum, secondNum, operator)
}


function myCalc(num1, num2, operator){
    let result;
    switch(operator){
        case "+":
            result = num1 + num2
            calcDisplay.innerHTML = result
            break
        case "-":
            result = num1 - num2
            calcDisplay.innerHTML = result
            break
        case "*":
            result = num1 * num2
             calcDisplay.innerHTML = result
             break
         case "/":
            result = num1 / num2
            calcDsiplay.innerHTML = result
            break
    }
}
