const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNumber = document.getElementById('day-number');
const yearName = document.getElementById('year');

const date = new Date();

const month = date.getMonth();

// month
monthName.innerText = date.toLocaleString('en',{
    month: 'long'
})

// day name
dayName.innerText = date.toLocaleString('en',{
    weekday: 'long'
})

// day number
dayNumber.innerText = date.getDate();

// year
yearName.innerText = date.getFullYear();