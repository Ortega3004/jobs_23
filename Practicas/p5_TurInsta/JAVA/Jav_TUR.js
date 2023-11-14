let imagenes=document.querySelectorAll('.galeria__img');
let modal=document.querySelector('#modal');
let imagen=document.querySelector('#modal_img');
let texto=document.querySelector('#modal_texto');//Elemento para mostrar el texto
let boton=document.querySelector('#modal_boton');
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click',function(e){
modal.classList.toggle("modal--open");
    let src=e.target.src;
    let textoImg=e.target.dataset.texto;
imagen.setAttribute("src",src);
texto.textContent = textoImg; // Muestra el texto en el elemento modal_texto



})
}
boton.addEventListener('click',function() {

  modal.classList.toggle("modal--open");
} )