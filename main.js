const arregloDebotones = document.querySelectorAll("button");
const numeroHtml = document.querySelector(".flex>h2");

let numeroReal = 0; //1
numeroHtml.innerText = numeroReal;

function Sumar(sumando){
    numeroReal += sumando;
    numeroHtml.innerText = numeroReal;
}


arregloDebotones.forEach((boton) => {
    boton.addEventListener('click',(evento) => {
        let numero = Number(evento.target.innerText);
        Sumar(numero);           
    })
})
