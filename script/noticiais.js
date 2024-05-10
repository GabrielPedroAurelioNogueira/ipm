var icon=document.getElementById('icon')
icon.addEventListener('click',show)
var menu=document.getElementById('menu')
 
let link=document.getElementsByClassName('item_menu')
var main= document.getElementById('txt_main')
function show(params) {
 if(menu.style.width=='130px'){
 
    menu.style.width='0px'
 
 
    
 }else{
    menu.style.width='130px'
 
   
    
 }
}
function  fechar(params) {
   menu.style.width='0px'
}