let currentDisplay='';
document.querySelector('#output').value=currentDisplay;
function num9(){
     currentDisplay=currentDisplay+'9';
     document.querySelector('#output').value=currentDisplay;
};
function num8(){
     currentDisplay=currentDisplay+'8';
     document.querySelector('#output').value=currentDisplay;
};

function num7(){
     currentDisplay=currentDisplay+'7';
     document.querySelector('#output').value=currentDisplay;
};

function num6(){
     currentDisplay=currentDisplay+'6';
     document.querySelector('#output').value=currentDisplay;
};

function num5(){
     currentDisplay=currentDisplay+'5';
     document.querySelector('#output').value=currentDisplay;
};

function num4(){
     currentDisplay=currentDisplay+'4';
     document.querySelector('#output').value=currentDisplay;
};

function num3(){
     currentDisplay=currentDisplay+'3';
     document.querySelector('#output').value=currentDisplay;
};

function num2(){
     currentDisplay=currentDisplay+'2';
     document.querySelector('#output').value=currentDisplay;
};

function num1(){
     currentDisplay=currentDisplay+'1';
     document.querySelector('#output').value=currentDisplay;
};

function num0(){
     currentDisplay=currentDisplay+'0';
     document.querySelector('#output').value=currentDisplay;
};
function s_plus(){
     currentDisplay=currentDisplay+'+';
     document.querySelector('#output').value=currentDisplay;
}

function s_minus(){
     currentDisplay=currentDisplay+'-';
     document.querySelector('#output').value=currentDisplay;
}

function s_multiply(){
     currentDisplay=currentDisplay+'*';
     document.querySelector('#output').value=currentDisplay;
}

function s_divide(){
     currentDisplay=currentDisplay+'/';
     document.querySelector('#output').value=currentDisplay;
}

function s_equal(){
     let res=eval(currentDisplay);
     document.querySelector('#output').value=res;
}

function s_clear(){
     currentDisplay='';
     document.querySelector('#output').value=currentDisplay;
}