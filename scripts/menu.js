const menuBox = document.querySelector(".menu-box");
const menuBtn = document.querySelector(".header-right-menu");
menuBtn.onclick = function () {
    menuBox.classList.toggle("open-menu");

    if (menuBox.classList.contains("open-menu")) {
        menuBtn.style.color = "#fff";
        menuBtn.textContent = "CLOSE";
    } else {
        menuBtn.textContent = "MENU";
        menuBtn.style.color = "#000";
    }
};
