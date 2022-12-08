const input = document.querySelector('input');

const charCount = document.querySelector('#char-no');
const wordCount = document.querySelector('#word-no');
const firstChar = document.querySelector('#first-char');
const lastChar = document.querySelector('#last-char');
const upperCase = document.querySelector('#upper');
const lowerCase = document.querySelector('#lower');
const capitalized = document.querySelector('#capitalized');

input.addEventListener('input', () => {
    const ip = input.value;
    charCount.innerHTML = ip.length;
    let wc = 0;
    if (ip === '')
        wc = 0;
    else {
        let newString = ip.replace(/\s+/g, " ");
        const count = newString.split(" ").length;
        wc = newString.charAt(newString.length - 1) === " " ? count - 1 : count;
    }
    wordCount.innerHTML = wc;
    firstChar.innerHTML = ip.charAt(0) === " " ? `' '` : ip.charAt(0) === '' ? `''` : ip.charAt(0);
    lastChar.innerHTML = ip.charAt(ip.length - 1) === " " ? `' '` : ip.charAt(ip.length - 1) === '' ? `''` : ip.charAt(ip.length - 1);
    upperCase.innerHTML = ip === '' ? `''` : ip;
    lowerCase.innerHTML = ip === '' ? `''` : ip;
    capitalized.innerHTML = ip === '' ? `''` : ip;
});