const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const work = document.getElementById('work');

let dashboardData;
fetch('./data.json').then((req) => {
    if(!req.ok) {
        throw new Error('Network response was not okay')
    }
    return req.json()
}).then((data) => {
    dashboardData = data;
}).catch((error) => {
    console.error('Fetch error: ',error);
})

function addData(time) {
    dashboardData.forEach((item,index) => {
        appendItem(item,index,time);
    })
}

function appendItem(item,index,time) {
    const dataChanges = document.getElementsByClassName('dashboard-card__time');
    dataChanges[index].children[0].innerHTML= `${item['timeframes'][time]['current']}<span>hrs</span>`
    dataChanges[index].children[1].innerHTML = `<span>last week - </span>${item['timeframes'][time]['previous']}<span>hrs</span>`
}

daily.addEventListener('click', () => {
    daily.style.color = 'hsl(0,0%,100%)';
    weekly.style.color = "var(--color-paleblue)";
    monthly.style.color ="var(--color-paleblue)"; 
    addData('daily');
})

weekly.addEventListener('click', () => {
    weekly.style.color = 'hsl(0,0%,100%)';
    daily.style.color = "var(--color-paleblue)";
    monthly.style.color ="var(--color-paleblue)"; 
    addData('weekly');
})

monthly.addEventListener('click', () => {
    monthly.style.color = 'hsl(0,0%,100%)';
    weekly.style.color = "var(--color-paleblue)";
    daily.style.color ="var(--color-paleblue)"; 
    addData('monthly');
})