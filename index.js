let cuadroSeleccionado = document.querySelectorAll('.cuadros');
let msjResult = document.querySelector('.mensajeResultado');
let ingresarBoton = document.querySelector('.ingresarBoton');

let ganador = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let jugadorUno = [];
let jugadorDos = [];
let turno = 'X'
let contador = 0;

cuadroSeleccionado.forEach(cuadro => {
    cuadro.addEventListener('click', (event) => {
        contador++
        if(turno == 'X'){
            event.target.textContent = 'X'
            turno = 'O'
            jugadorUno.push(parseInt(event.target.id))
            result(jugadorUno, 'Jugador Uno')
            console.log(jugadorUno)
        } else{
            event.target.textContent = 'O'
            turno = 'X'
            jugadorDos.push(parseInt(event.target.id))
            result(jugadorDos, 'Jugador Dos')
        }
    })
})

const result = (arregloJugador, nombreJugador) => {
    let resultado = ganador.some(combinacion => combinacion.every(item => arregloJugador.includes(item)))
        if(resultado){
            msjResult.textContent = `¡¡Felicidades ${nombreJugador}!!`
            crearBoton()
        }
        if(contador > 8 && msjResult.textContent == ''){
            msjResult.textContent = 'No hay ganador :('
            crearBoton()
        }
}

const crearBoton = () => {
    contador = 0
    let boton = document.createElement('button')
        boton.classList.add('btn', 'btn-primary')
        boton.innerText = 'Reiniciar el Juego'
        ingresarBoton.appendChild(boton)
    let botton = document.querySelector('.btn')
    botton.addEventListener('click', () => {
        cuadroSeleccionado.forEach(div => div.textContent = '')
        msjResult.textContent = ''
        jugadorUno = []
        jugadorDos = []
        ingresarBoton.removeChild(boton)  
    })
    
}