var icon=document.getElementById('icon');
icon.addEventListener('click',show)
let list=document.getElementById('lista')
function show(params) {
    if (list.style.display=='block') {
        list.style.display='none'
       icon.innerHTML='≣'
       icon.style.cursor=`pointer`
icon.style.fontSize=28+'pt'
    } else {
        list.style.display='block'
      icon.innerHTML='✖'
      icon.style.color='#000'
      icon.style.cursor=`pointer`
      icon.style.fontSize=28+'pt'
    }
}

function  change_size(params) {
  
     if (window.innerWidth>=768) {
        list.style.display='block'
        icon.style.display='none'
 
        
    } else {if(window.innerWidth<768){
        list.style.display='none'
        icon.innerHTML='≣'
        icon.style.fontSize=28+'pt'
        icon.style.display='block'
        icon.style.color='#000'
}
    }
}
function getname(params) {
    
}
function getemail(params) {
    
}
function getphone(params) {
    
}
function getpassword(params) {
    
}
function getcurso(params) {
    
}
 function  adicionar(params) {
 var cadastrado={
    nome:getname(),
    email:getemail(),
    phone:getphone(),
    password:getpassword(),
    curso:getcurso()
 }
 
 }
 
adicionar()