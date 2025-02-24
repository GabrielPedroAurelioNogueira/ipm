let link_imagens = [
    {
        img: "img1.jpg",
        url: "sobre.html",
        titulo: "Titulo para imagens 1",
        info: ""
    },
    {
        img: "img2.jpg",
        url: "sobre.html",
        titulo: "Titulo para imagens 2",
        info: ""
    },

    {
        img: "img3.jpg",
        url: "",
        titulo: "Titulo para imagens 3",
        info: ""
    },

    {
        img: "img4.jpg",
        url: "",
        titulo: "Titulo para imagens 4",
        info: ""
    },

    {
        img: "img7.jpg",
        url: "",
        titulo: "Titulo para imagens 5",
        info: ""
    },




];

let tela = document.querySelector("#tela");
let img_n = 0;
setInterval(() => {

    if (img_n == link_imagens.length) {
        img_n = 0
        mudar_img();
    } else {
        img_n++;
       mudar_img();
    }

}, 5000);
function mudar_img(params) {
    
tela.innerHTML=`     
<a href="${link_imagens[img_n].url}" style="background-image: url(../imagens/${link_imagens[img_n].img});">
 <div class="titulo">
     <h1>
         ${link_imagens[img_n].titulo}
     </h1>
 </div><div class="info">
     <p>
        ${link_imagens[img_n].info}
     </p>
 </div>
</a>`
}
function ver(params) {
    tela.innerHTML=`     
<a href="${link_imagens[img_n].url}" style="background-image: url(../imagens/${link_imagens[img_n].img});">
 <div class="titulo">
     <h1>
     ${link_imagens[img_n].titulo}
     </h1>
 </div><div class="info">
     <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae illo unde exercitationem.
     </p>
 </div>
</a>`
}