var div_video=document.querySelectorAll('.div_video')


let video= document.querySelectorAll('video')
video.forEach((itens)=>{
    itens.addEventListener('click',expandir_div_video)
   })
/*
function  expandir_video(params) {
    div_video.forEach((itens)=>{
     
        itens.classList.add('grande_div_video')
 
 
       
       })
      
 }

 div_video.forEach((itens)=>{
    itens.addEventListener('click',expandir_video)
   })
   function fechar_video(){
    div_video.forEach((item)=>{
        item.classList.remove('grande_div_video')
        item.classList.add('pequena_div_video')
    })
   }



*/
  function expandir_div_video(params) {
   //alert('oi')
    if (div_video.style.width== 300) {
        div_video.style.width=400
    }
    else{
        div_video.style.width=300
    }
  }





