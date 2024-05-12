var video=document.querySelectorAll('video')

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

















