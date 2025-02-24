let titulo=document.getElementById("titulo")
let left_btn=document.querySelector("#left_btn");
let right_btn=document.querySelector("#right_btn");
let imagens=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg"];
let img_link=document.querySelectorAll(".img_link")[0]
 let pos=0;
left_btn.addEventListener("click",()=>{
 
if(pos==0){
    pos=imagens.length-1;
}else{
    pos--;
}
mudar();
})
right_btn.addEventListener("click",()=>{

if(pos==imagens.length-1){
    pos=0;
}else{
    pos++;
}
mudar();
})











function subir_titulo(params) {
titulo.classList.add("titulo");
}
function mudar(params) {
    alert("fdsf");
    img_link.style.backgroundImage=`url(../imagens/${imagens[pos]});`;
    
}