const inputElement = document.querySelector('.input');
const bodyelement = document.querySelector('body');

inputElement.checked = JSON.parse(localStorage.getItem('mode'));
// inputElement.checked = false;

updateBody();
function updateBody() {
    if (inputElement.checked) {
        bodyelement.style.backgroundColor = "black";
    }else{
        bodyelement.style.backgroundColor = "white";
    }
}
// inputElement.addEventListener('change', updateBody);

// Calls updateLocalStorage() to save the updated state in localStorage.
inputElement.addEventListener('input',()=>{
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage() {
    // localStorage.setItem('theme', inputElement.checked? 'dark' : 'light');
    localStorage.setItem('mode',JSON.stringify(inputElement.checked));
}