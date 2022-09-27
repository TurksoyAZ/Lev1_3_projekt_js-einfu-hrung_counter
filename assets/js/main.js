let output = document.getElementById("output");
let numer = 0;





function plusOne() {
  numer ++ ;
  output.innerHTML = numer;
}


function minusOne() {

if(numer<=1)numer=1
numer -- ;
output.innerHTML = numer;
}

function plusTen() {

numer += 10;
output.innerHTML = numer;
}



function minusTen() {
if(numer<=10) numer=10
numer -= 10;
output.innerHTML = numer;
}


function plusHundred() {
  numer += 100;
  output.innerHTML = numer;
}

function minusHundred() {
if(numer<=100) numer=100
numer -= 100;
output.innerHTML = numer;
}

function multiplicationTwo() {
  numer *= 2;
  output.innerHTML = numer;
}


function resetResult() {
    numer = 0
    output.innerHTML = numer;
}