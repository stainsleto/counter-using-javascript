const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
let counter = 0; 

// increment function
function incrementCounter() { 
    const counterEl = document.getElementById('counter');
    counter++;
    counterEl.innerText = counter;
}


//decrement function
function decrementCounter(){ 
    const counterDec = document.getElementById('counter');
    counter--;
    counterDec.innerText = counter;
}

incrementBtn.addEventListener('click',incrementCounter);
decrementBtn.addEventListener('click',decrementCounter);
