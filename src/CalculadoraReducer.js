const estadoInicial = {
    valorPantalla: '0',
    valorPrevio: 0,
    operador: null,
    esperandoOperando: false,
}

function calculadoraReducer(estado, accion) {
    switch (accion.tipo) {
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
        case "PRESIONAR_OPERADOR": {
            return{
                ...estado,
                valorPrevio : Number.parseInt(estado.valorPantalla),
                operador : accion.operador,
                esperandoOperando : true,
            }
        }
        case "CALCULAR_RESULTADO": {
            if (!estado.operador || estado.esperandoOperando) return estado;
            const nuevoValor = eval(`${estado.valorPrevio} ${estado.operador} ${estado.valorPantalla}`);
            return{
                ...estado,
                valorPantalla: String(nuevoValor),
                operador: null,
                esperandoOperando: false,
            }

       }
        case "LIMPIAR": {
            return{
                ...estadoInicial
            }
        }
        default:
            return estado;
    }
}

export {estadoInicial, calculadoraReducer}