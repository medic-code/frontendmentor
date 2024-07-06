const copied = document.getElementById('copytext');
const copyicon = document.getElementById('copy');
const copyText = document.getElementById('copied')
const button = document.getElementById('submit')
const password = document.getElementById('password');
const slider = document.getElementById('slider');
const charLength = document.getElementById('charlength');
const checkBoxes = document.getElementsByClassName('password-gen-settings__check')
const bars = document.getElementById('bars');

console.log(checkBoxes);
function generatePasswordChar(checked) {
    const randomChecked = Math.floor(Math.random()*checked.length);
    let passwordChars = {
        'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVXYWZ',
        'lowercase': 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'.toLowerCase(),
        'numbers':  '0123456789',
        'symbols':'!@£$%$()^'
    }
    const characterChoice = checked[randomChecked];
    const passwordChoice = passwordChars[characterChoice];
    const randomCharacterNum = Math.floor(Math.random()*passwordChoice.length)
   return passwordChoice[randomCharacterNum]; 
    
}

function passwordGenerate(pwlen,checked) {

   let password = '';
    for (let i =0; i < pwlen; i++) {
        password += generatePasswordChar(checked);
    }
  return password; 
}

for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', () => {
        checkBoxes[i].style.background = "url('./assets/images/icon-check.svg') no-repeat center, var(--color-green)"
        if (!checkBoxes[i].checked) {
         checkBoxes[i].style.background = '';
        }
    })

}
  
charlength.textContent = slider.value 

copyicon.addEventListener('click',() => {
    navigator.clipboard.writeText(password.textContent).then(function () {
        copyText.style.display = 'flex';
        setTimeout(() => {
            copyText.style.display = 'none';
        },1000)
    })
    
})

slider.addEventListener('input',() => {
    charLength.textContent = slider.value;
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    const upperChecked = document.getElementById('uppercase').checked ? 'uppercase' : '';
    const lowerChecked = document.getElementById('lowercase').checked ? 'lowercase' :'';
    const numChecked = document.getElementById('numbers').checked ? 'numbers' : '';
    const symbolChecked = document.getElementById('symbols').checked ? 'symbols' : '';
    const checkedArr = [upperChecked, lowerChecked, numChecked, symbolChecked].filter((elem) => elem);
    const category = document.getElementById('category');

    switch(checkedArr.length) {
        case 0:
            break
        case 1:
            category.textContent = 'TOO WEAK!'
            bars.children[0].style.background = 'var(--color-red)';
            break
        case 2: 
            category.textContent = 'WEAK'
            bars.children[0].style.background = 'var(--color-orange)';
            bars.children[1].style.background = 'var(--color-orange)';
            break
        case 3:
            category.textContent = 'MEDIUM'
            bars.children[0].style.background = 'var(--color-yellow)';
            bars.children[1].style.background = 'var(--color-yellow)';
            bars.children[2].style.background = 'var(--color-yellow)';
            break;
        case 4:
            category.textContent = 'STRONG';
            bars.children[0].style.background = 'var(--color-green)';
            bars.children[1].style.background = 'var(--color-green)';
            bars.children[2].style.background = 'var(--color-green)';
            bars.children[3].style.background = 'var(--color-green)';
            break;
        default:
            break;
    }
    if (checkedArr.length === 0) {
        return '';
    } else {
        password.textContent = passwordGenerate(slider.value,checkedArr);
        password.style.color = 'var(--color-white)';
    }
   
})