const estadoInicial = {
    valorPantalla: '0',
    valorPrevio: 0,
    operador: null,
    esperandoOperando: false,
}

function calculadoraReducer(estado, accion) {
    switch (accion) {
        case "PRESIONAR_NUMERO": {
            if (estado.esperandoOperando) {
               return {
                ...estado,
                esperandoOperando: false,
                valorPantalla: accion.numero,
               }
            } else {
                 //setValorPantalla((previo) => (previo === '0' ? tecla : previo + tecla));
                 return{
                    ...estado,
                    valorPantalla: (estado.valorPantalla === '0' ? accion.numero : estado.valorPantalla + accion.numero),
                 }
            }
        }
            break;
        case "PRESIONAR_OPERADOR": {}
            break;
        case "CALCULAR_RESULTADO": {}
            break;
        case "LIMPIAR": {}
            break;
        default:
            break;
    }
}

export {estadoInicial, calculadoraReducer}