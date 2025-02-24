let cards=[
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img1.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Aguinaldo",
    profissao:"Programador Web",
    img:"img2.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Leonel",
    profissao:"Programador Web",
    img:"img3.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img4.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img5.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img6.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img7.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img8.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},
{
    nome:"Gabriel Pedro Aurelio",
    profissao:"Programador Web",
    img:"img9.jpg",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione aliquam odio, numquam voluptas error autem excepturi vitae rerum iusto tempore nulla, quis quaerat debitis quo unde, reprehenderit aperiam facere "
},

]

//
let galeria=document.querySelector("#galeria");
function loading(params) {
    galeria.innerHTML="";
    cards.forEach((card_item)=>{
galeria.innerHTML+=`<div class="card-box"><div class="dados-img-name"><div class="img"><img src="../imagens/${card_item.img}" alt="" ></div><div class="name"><strong>${card_item.nome}</strong><p>${card_item.profissao}</p></div></div><div class="info"><p>${card_item.info}</p></div></div>`
})
    }