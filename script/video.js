var div_video=document.querySelectorAll('.div_video')


let video= document.querySelectorAll('video')
function  expandir_video(params) {
    div_video.forEach((itens)=>{
        itens.classList.remove('grande_div_video')
    
 
       
       })
       this.classList.add('grande_div_video')
 }

 div_video.forEach((itens)=>{
    itens.addEventListener('click',expandir_video)
   })
/*
function  fechar_video(params) {
    div_video.forEach((itens)=>{
        itens.classList.remove('grande_div_video') 
       })
 this.classList.add('pequena_div_video')
   alert('oi')
}

 

*/


















/*
 function  expandir_video(params) {
    video.forEach((itens)=>{
        itens.classList.remove('video-grande')
        itens.document.createAttribute('controls')
       })
       this.classList.add('video-grande')
 }

 video.forEach((itens)=>{
    itens.addEventListener('click',expandir_video)
   })

function  fechar_video(params) {
    video.forEach((itens)=>{
        itens.classList.remove('video-grande') 
       })
       this.classList.add('video-pequena')
}




*/












