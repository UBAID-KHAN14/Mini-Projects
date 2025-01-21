const container = document.querySelector('.container');

const careers = [
    'Web Developer',
    'Web Designer',
    'Freelance Developer',
    'Software Engineer',
    'Data Analyst'
];

let careersIndex = 0;

let characterIndex = 0;

updateText();
function updateText() {
    characterIndex++;

    container.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0,characterIndex)}</h1>
   `;

    if (characterIndex === careers[careersIndex].length) {
        characterIndex = 0;
        careersIndex++;
    }

    if (careersIndex === careers.length) {
        careersIndex = 0;
    }
    setTimeout(updateText,200);
}
