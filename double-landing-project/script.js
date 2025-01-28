const containerEl = document.querySelector('.container');

const leftEl = document.querySelector('.left');

const rightEl = document.querySelector('.right');

rightEl.addEventListener('mouseenter', () =>{
    containerEl.classList.add('active-left');
})

rightEl.addEventListener('mouseleave', () =>{
    containerEl.classList.remove('active-left');
});

leftEl.addEventListener('mouseenter', () =>{
    containerEl.classList.add('active-right');
})

leftEl.addEventListener('mouseleave', () =>{
    containerEl.classList.remove('active-right');
});