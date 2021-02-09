let input = document.getElementById('number');
let ticketPrice = 120;
let pricePlusBtn = document.getElementById('pricePlus');
let priceMinusBtn = document.getElementById('priceMinus');
let htmlOutput = document.getElementById('totalPriceOutput');

function increaseInput(e){
    e.preventDefault();
    input.value++;
    calculate();
}

function decreaseInput(e){
    e.preventDefault();
    if(input.value > 0){
        input.value--;
        calculate();
    }
}

function calculate(){
    let inputTicket = input.value;
    let totalPrice = inputTicket * ticketPrice;
    output(totalPrice);
}

function output(price){
    htmlOutput.innerText = price;
}

pricePlusBtn.addEventListener('click', increaseInput);
priceMinusBtn.addEventListener('click', decreaseInput);
input.addEventListener('keyup', calculate);