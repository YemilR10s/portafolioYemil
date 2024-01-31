
/* <!-- ------------------- barra menu------------------ --> */

/* ul menu */

const xmark = document.querySelector('.fa-xmark')
const hamburguer = document.querySelector('.fa-bars')
const ul = document.querySelector('.ul')

hamburguer.addEventListener('click', ()=>{
    ul.classList.add('active')
})
xmark.addEventListener('click', ()=>{
    ul.classList.remove('active')
})