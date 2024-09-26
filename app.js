"use app";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function() {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
});

function handleYesClick() {
    titleElement.innerHTML = "Anh biết mò bé có yêu anh gì âu hic hic :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "Ỏ thiệt hong á",
        "Khó tin quá zạ",
        "Nghi lắm à nhaaa",
        "phải hongg áaaa",
        "Hong tin lắm ạaaaa",
        "òi òi plè plè",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `data:image/jpeg;base64,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`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}
