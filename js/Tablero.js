class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx) {
         // inicializa el tablero todos los elementos de color WHITE
                 this.filas=filas;
                 this.columnas=columnas;
                 this.tamañoCuadrado=tamañoCuadrado;
                 this.ctx=ctx;
}

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {}

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {};

    get filas() {
        return this.filas;
    }

    set filas(fila) {
        this.filas=filas;
    }

    get columnas() {
        return this.columnas;
    }

    set columnas(columna) {
        this.columnas=columnas;
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return 
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {

    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {}

}