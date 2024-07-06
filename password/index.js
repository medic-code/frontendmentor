const copied = document.getElementById('copytext');
const copyicon = document.getElementById('copy');
const copyText = document.getElementById('copied')
const button = document.getElementById('submit')
const password = document.getElementById('password');
const slider = document.getElementById('slider');
const charLength = document.getElementById('charlength');
const checkBoxes = document.getElementsByClassName('password-gen-settings__check')
const bars = document.getElementById('bars');

charlength.textContent = slider.value 
if (slider.value === slider.min) {
    slider.style.backgroundColor = 'var(--color-verydarkgrey';
} else {
    slider.style.backgroundColor = 'var(--color-green)'
}

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

const checkBoxContainer = document.querySelector('.password-gen-settings__list');
checkBoxContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('password-gen-settings__check')) {
        event.target.style.background = event.target.checked ? "url('./assets/images/icon-check.svg') no-repeat center, var(--color-green)" : '';
    }
});

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
    updateSliderColour();
})

function updateSliderColour() {
    const value = (slider.value - slider.min)*100 / 30
    slider.style.background = `linear-gradient(to right, var(--color-green) 0%, var(--color-green) ${value}%, var(--color-verydarkgrey) ${value}%, var(--color-verydarkgrey) 100% )`
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    const checkedArr = ['uppercase', 'lowercase', 'numbers', 'symbols'].filter((id) => document.getElementById(id).checked);
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