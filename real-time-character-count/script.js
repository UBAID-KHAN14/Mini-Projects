const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () =>{
    updateCounter();
});

updateCounter(); // Initial count when the page loads.
function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;

    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
    
}