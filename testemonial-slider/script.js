const testemonials = [
    {
        name: 'Sarah Johnson',
        imageUrl: 'samsung-memory-AITXm0Tp_Po-unsplash.jpg',
        text: "I'm blown away by the cutting-edge technology of Iphone's Mobile Phones. The sleek design and top-notch performance exceed all expectations. I highly recommend Iphone to anyone looking for a premium mobile experience."
    },
    {
        name: 'Evelyn Porter',
        imageUrl: 'andrey-matveev--zhGi846nt4-unsplash.jpg',
        text: "I am extremely impressed with the quality and performance of the mobile phones from Iphone. The sleek design and user-friendly interface make it a top choice for tech-savvy users. I highly recommend Iphone to anyone looking for a reliable and stylish mobile device."
    },
    {
        name: 'Ava Johnson',
        imageUrl: 'samsung-memory-IJolVhJKk7c-unsplash.jpg',
        text: "Iphone's Mobile Phones are truly exceptional, surpassing all expectations. The sleek design, cutting-edge technology, and user-friendly interface make it a top choice for tech enthusiasts. I am beyond impressed with the performance and reliability of Iphone's products."
    },

]

const imgEl= document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');
let idx = 0;

updateTestemonial()
function updateTestemonial() {
    const{name, imageUrl, text} = testemonials[idx];
    imgEl.src = imageUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    idx++;
    if (idx === testemonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestemonial();
    }, 10000);
}