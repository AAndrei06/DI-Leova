let menu_btn = document.querySelector(".menu-icon-font");
let slide_area = document.querySelector(".menu-slide-area");
let xmark = document.querySelector(".xmark-btn-close");
let options = document.querySelectorAll(".option-create-menu");


menu_btn.addEventListener("click",() => {
    slide_area.classList.toggle("menu-show-cls");
});

xmark.addEventListener("click",() => {
    slide_area.classList.toggle("menu-show-cls");
});

function handleLink(link){
    window.location = link.value+".html";
}