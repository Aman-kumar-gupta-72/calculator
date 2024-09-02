function appendToDisplay(value){
    const display = document.getElementById('display');
    if(display.innerText===0 && value!== '/' &&  value !=='*' && value !=='-' && value !=='+'){
        display.innerText=value;
    }else{
        display.innerText +=value;
    }
}
function clearDisplay(value){
    const display =document.getElementById('display');
    display.innerText='';
}
function calculateResult(value){
    const display =document.getElementById('display');
    try{
        display.innerText = eval(display.innerText);

    }catch{
        display.innerText='error'
    }
}