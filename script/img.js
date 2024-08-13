var div_img=document.querySelectorAll('.estrutura-child')
function img_maior(params) {
    div_img.forEach((item)=>{
        item.classList.toggle("maior")
    })
   this.item.classList.toggle("maior")
   
      
}

div_img.forEach((item)=>{
    item.addEventListener("click",img_maior)
})

