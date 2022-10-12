const textArray = ["Canon 6D", "Iphone 14 Pro Max", "Fujifilm X100V"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

function typing() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, typingDelay);
    } else {
        // erase
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}
erase = () => {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // type
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(typing, typingDelay + 1100);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    if(textArray.length) setTimeout(typing, newTextDelay + 250);
});
