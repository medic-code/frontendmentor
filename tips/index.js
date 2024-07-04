const bill = document.getElementById('billAmount');
const numPeople = document.getElementById('numPeople');
const totalAmount = document.getElementById('total-amount')
const tips = document.getElementById('tipamount-dollars')
const numError = document.getElementById('numError');
const five = document.getElementById('5per');
const ten = document.getElementById('10per');
const fifteen = document.getElementById('15per')
const twentyfive = document.getElementById('25per');
const fifty = document.getElementById('50per');
const custom = document.getElementById('custom');
const reset = document.getElementById('reset');
const buttonList = document.getElementById('button-list');
const newinput = document.getElementById('custom-input');

function getTip(percent,bill,nums) {
    return (percent*bill)/nums;
}

function displayValues(percent) {
    const billValue = Number(bill.value);
    const nums = Number(numPeople.value); 
    const tipValue = getTip(percent, billValue,nums)
    
    const total = billValue/nums + tipValue;
 
    if(nums <= 0) {
       numError.textContent = 'Cant be Zero or Negative';
       numPeople.style.border = '2px solid hsl(13,70%,60%)';
    } else {
        numError.textContent = '';
        numPeople.style.border = '0';
        totalAmount.textContent = total.toFixed(2);
        tips.textContent = Number(tipValue).toFixed(2);
    }
}

function changeButton(element) {
    element.style.backgroundColor = 'var(--color-reset)'
    element.style.color = 'var(--color-very-dark-cyan)'
}

function changeColorBack(element) {
    element.style.backgroundColor = 'var(--color-very-dark-cyan)';
    element.style.color = 'var(--color-white)';
}


five.addEventListener('click', () => {
    displayValues(0.05);
    for (let i =0; i < buttonList.children.length-2; i++) {
        changeColorBack(buttonList.children[i])
    }

    changeButton(five);

})

ten.addEventListener('click', () => {
    displayValues(0.1);
    for (let i =0; i < buttonList.children.length-2; i++) {
        changeColorBack(buttonList.children[i])
    }
    changeButton(ten)
    

})

fifteen.addEventListener('click', () => {
    displayValues(0.15);
    for (let i =0; i < buttonList.children.length-2; i++) {
        changeColorBack(buttonList.children[i])
    }
    changeButton(fifteen);
})

twentyfive.addEventListener('click', () => {
    displayValues(0.25);
    for (let i =0; i < buttonList.children.length-2; i++) {
        changeColorBack(buttonList.children[i])
    }
    changeButton(twentyfive);
})

fifty.addEventListener('click', () => {
    displayValues(0.50);                                                                                                                                                                                                                                                                                                                                             
    for (let i =0; i < buttonList.children.length-2; i++) {
        changeColorBack(buttonList.children[i])
    }
    changeButton(fifty);
})

reset.addEventListener('click',() => {
    tips.textContent = '0.00';
    totalAmount.textContent = '0.00';
    numError.style.display = 'none';
})

custom.addEventListener('click',() => {
    custom.style.display = 'none'
    newinput.style.display = 'inline';
    newinput.style.border = '1px solid var(--color-reset)'
    newinput.focus();
})

newinput.addEventListener('keydown',(event) => {
    if (event.key === 'Enter') {

        const tipValue = Number(document.getElementById('custom-input').value)/100;
        if (tipValue) {
            displayValues(tipValue);
        }
    }
    
})