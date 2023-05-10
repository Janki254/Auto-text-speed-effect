const textEle = document.getElementById('text');
const speedInputEle = document.getElementById('speed');

const text = 'Auto Text Generated Based on Defined Speed!...';

let indx = 1;
let speed = 300 / speedInputEle.value;

writeText();

function writeText() {
    textEle.innerText = text.slice(0, indx);

    indx++;

    if (indx > text.length) {
        indx = 1;
    }

    setTimeout(writeText, speed);
}

speedInputEle.addEventListener('input', (e) => (speed = 300 / e.target.value));
