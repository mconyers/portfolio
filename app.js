let contentwinter = document.querySelector(".contentwinter")
let icona = document.querySelector(".icona");
let iconc = document.querySelector(".iconc");
let icone = document.querySelector(".icone");
let icong = document.querySelector(".icong");
let iconi = document.querySelector(".iconi");
let buta = document.querySelector(".buta");
let titlea = document.querySelector(".titlea");
let button = document.querySelector("button");
let menua = document.getElementsByClassName("menua");
let sect1a = document.getElementsByClassName("sect1a");
let footerw = document.querySelector(".footerw");

i = 0;
txt = 'Behind The Code';
speed = 100;


button.addEventListener('click', () => {
    contentwinter.classList.toggle('contentsummer');
    icona.classList.toggle('iconb')
    iconc.classList.toggle('icond')
    icone.classList.toggle('iconf')
    icong.classList.toggle('iconh')
    iconi.classList.toggle('iconj')
    buta.classList.toggle('butb')
    footerw.classList.toggle('footers')
    titlea.classList.toggle('titleb')
    for (let i = 0; i < menua.length; i++) {
        menua[i].classList.toggle('menub')
    }
    for (let i = 0; i < sect1a.length; i++) {
        sect1a[i].classList.toggle('sect1b')
    }
})
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()


