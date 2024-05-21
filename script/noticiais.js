var icon=document.getElementById('icon')
icon.addEventListener('click',show)
var menu=document.getElementById('menu')
 var main=document.querySelectorAll('main')[0]
let link=document.getElementsByClassName('item_menu')
var main= document.getElementById('txt_main')
var item_menu=document.querySelectorAll('a.item-menu')[0]
 
function show(params) {
 if(menu.style.width=='130px'){
 item_menu.styleopacity=0
    menu.style.width='0px'
   
 }else{
    menu.style.width='130px'
    item_menu.style.opacity=1.
    
 }
}
function  fechar(params) {
   menu.style.width='0px'
}
