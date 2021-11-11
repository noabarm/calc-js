let myOpr;
let lastNumber;
let isEqual;
let hasPoint;
let myRes;
let myEx;
let tempOpr

function init(){
    myRes = document.getElementById("res");
    myEx = document.getElementById("showEx")
    myOpr="";
    lastNumber=0;
    isEqual = false;
    hasPoint = false;
}

function num(myNumber){
    if (isEqual) return;
    if (myRes.innerText==="0"){
        myRes.innerText=myNumber;
        return;
    }
    myRes.innerText = myRes.innerText+myNumber;
}

function opr(userOpr){
    isEqual=false;
    if (userOpr==='.'){
        if (hasPoint) return;
        myRes.innerText=myRes.innerText+".";
        hasPoint = true;
        return;
    }
    if (userOpr!="="){
        if(myOpr===""){
        myOpr=userOpr;
        lastNumber=Number(myRes.innerText);
        myEx.innerText = lastNumber + myOpr;
        clr();
        }else{
            tempOpr=userOpr;
            makeCalc();
            clr();
        }
    } else {
        isEqual=true;
        makeCalc();
        myOpr="";
    } 
}

function clr(){
    myRes.innerText="";
    hasPoint = false;
}

function makeCalc(){
    let currentNumber = Number(myRes.innerText);
    let theResult = 0;
    switch (myOpr){
        case '/':
            theResult = lastNumber / currentNumber;
        break;
        case '*':
            theResult = lastNumber * currentNumber;
        break;
        case '-':
            theResult = lastNumber - currentNumber;
        break;
        case '+':
            theResult = lastNumber + currentNumber;
        break;
        case '√':
            theResult = Math.sqrt(lastNumber);
        break;
        case '^':
            theResult = Math.pow(lastNumber,currentNumber);
        break;
        case '^2':
            theResult = lastNumber * lastNumber;
        break;
        case '!':
            theResult = factorial(lastNumber);
        break;
    }
    myOpr=tempOpr;
    lastNumber=theResult;
    if(isEqual){
        myEx.innerText = theResult;
    }else{
    myEx.innerText = lastNumber + myOpr;
    }
    myRes.innerText = theResult;
}

function clrAll(){
    myEx.innerText="";
    isEqual=false;
    myOpr="";
    lastNumber=0;
    clr();
}

function factorial(num1){
    let counter = 2;
    let sum = 1;
    if(num1===0){
        return sum;
    }
    while(counter<=num1){
        sum *= counter;
        counter += 1;
    }
    return sum;
}
