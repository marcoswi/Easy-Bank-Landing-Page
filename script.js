

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuIcon.innerText = "\u2715";
    } else {
        menuIcon.innerText = "\u2630";
    };
});
