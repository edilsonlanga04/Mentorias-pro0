// ===== ANIMAÇÕES =====

const cards = document.querySelectorAll(".card");

const aparecer = new IntersectionObserver((items)=>{

items.forEach(item=>{

if(item.isIntersecting){

item.target.style.opacity="1";
item.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="0.7s";

aparecer.observe(card);

});

// ===== HEADER =====

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#111";
header.style.transition=".4s";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

document.querySelectorAll("nav a").forEach(a=>{

a.style.color="white";

});

}else{

header.style.background="white";

document.querySelectorAll("nav a").forEach(a=>{

a.style.color="#222";

});

}

});

// ===== BOTÕES =====

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ===== EFEITO NO TÍTULO =====

const titulo=document.querySelector(".left h1");

let estado=true;

setInterval(()=>{

if(estado){

titulo.style.color="#00b14f";

}else{

titulo.style.color="#222";

}

estado=!estado;

},1200);

// ===== PREÇO =====

const preco=document.querySelector(".price h1");

preco.style.transition=".5s";

preco.addEventListener("mouseenter",()=>{

preco.style.transform="scale(1.1)";

});

preco.addEventListener("mouseleave",()=>{

preco.style.transform="scale(1)";

});
