var btn_menu=document.getElementById('icon').addEventListener('click', show_menu)
var menu=document.getElementById('menu')
let item=document.getElementsByClassName('item_menu')
var header=document.getElementById('head1')
function show_menu(params) {
    if (menu.style.display=='block') {
        menu.style.display='none'
       btn_menu.innerHTML=3
        header.style.height='50px'
    } else {
        menu.style.display='block'
       
        header.style.height='200px'
    }
}
function change_size(){
    if(window.innerWidth > 768){
        menu.style.display='block'
     
    }
    else{
        menu.style.display='none'
    }
}