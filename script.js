function showContent(index){

    let items = document.querySelectorAll(".panel-item");
    let buttons = document.querySelectorAll(".strip button");

    /* Oculta todos */
    items.forEach(item=>{
        item.classList.remove("active");
    });

    buttons.forEach(btn=>{
        btn.classList.remove("active");
    });

    /* Activa el seleccionado */
    items[index].classList.add("active");
    buttons[index].classList.add("active");
}
window.addEventListener("scroll", ()=>{

    let nav = document.getElementById("navbar");
    let logo = document.getElementById("logo");

    if(window.scrollY > window.innerHeight - 170){
        nav.classList.add("scrolled");
        logo.src = "logo-oscuro.png"; 
    }else{
        nav.classList.remove("scrolled");
        logo.src = "logo-claro.png";
    }
});
function toggleInfo(e, clicked){

    e.stopPropagation(); // EVITA QUE SE DISPARE OTRO CLICK

    let items = document.querySelectorAll(".item");

    items.forEach(el => {

        if(el === clicked){
            el.classList.toggle("active");
        }else{
            el.classList.remove("active");
        }

    });
}
const onlineTexts = [
 "🗺️ Aprende chino desde donde estés 📍",
 "🗺️ 无论你在哪里，都可以学习中文 📍",
 "🖱️ Tu aula a un click 🧑‍💻",
 "🖱️ 一键进入你的课堂 🧑‍💻",
 "🎧 Clases 100% online en vivo 🖥️",
 "🎧 100% 在线课程，无限制 🖥️",
 "🎙️ Todas las clases las grabamos 📹",
 "🎙️ 所有课程都会录制 📹",
];

let t = 0;
const el = document.getElementById("onlineText");

setInterval(()=>{
    el.style.opacity = 0;

    setTimeout(()=>{
        t = (t+1) % onlineTexts.length;
        el.textContent = onlineTexts[t];
        el.style.opacity = 1;
    },500);

},3000);
