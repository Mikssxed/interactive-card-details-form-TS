const section = document.querySelectorAll("section");
const dot = document.querySelectorAll(".dot");
const markAll = document.querySelector("#read-all");
const number = document.querySelector("#number");
const toggleRead = (nr) => {
    section[nr].classList.toggle("unread");
    dot[nr].classList.toggle("dotOn");
};
const markAllFunc = () => {
    for (let i = 0; i < 7; i++) {
        section[i].classList.remove("unread");
        dot[i].classList.remove("dotOn");
    }
    number.innerHTML = "0";
};
const numberCount = () => {
    let counter = 0;
    for (let i = 0; i < 7; i++) {
        let currentSection = section[i];
        if (currentSection.classList.contains("unread")) {
            counter++;
        }
    }
    number.innerHTML = String(counter);
};
window.addEventListener("click", numberCount);
markAll.addEventListener("click", markAllFunc);
