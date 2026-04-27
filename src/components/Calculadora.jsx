import { /*useState,*/ useEffect, useRef, useReducer } from 'react';
import Pantalla from './pantalla';
import Teclado from './Teclado';
import CalculadoraContext from '../CalculadoraContext';
import { estadoInicial, calculadoraReducer } from '../CalculadoraReducer';

function Calculadora() {

  const [estado, dispatch] = useReducer(calculadoraReducer, estadoInicial, (inicial) => {
    const valorInicialPantalla = localStorage.getItem('ultimoValorPantalla');
    return valorInicialPantalla ? { ...inicial, valorPantalla: valorInicialPantalla } : inicial;
  });
  //const valorInicialPantalla = localStorage.getItem('ultimoValorPantalla') || '0';
  const pantallaRef = useRef(null);
  //const [valorPantalla, setValorPantalla] = useState(valorInicialPantalla);
  //const [valorPrevio, setValorPrevio] = useState(0);
  //const valorPrevio = useRef(0);
  //const [operador, setOperador] = useState(null);
  //const operador = useRef(null);
  //const [esperandoOperando, setEsperandoOperando] = useState(false);
  //const esperandoOperando = useRef(false);
  

  useEffect(() => {
    document.title = `Calculadora: ${estado.valorPantalla}`;
  });

  useEffect(() => {
    localStorage.setItem('ultimoValorPantalla',estado.valorPantalla);
  }, [estado.valorPantalla]);

  const presionarTecla = (tecla) => {
    pantallaRef.current?.blur();
    if ('0123456789'.includes(tecla)) {
      //pantallaRef.current?.blur();
      dispatch({ tipo: "PRESIONAR_NUMERO", numero: tecla });

    } else if ('+-*/'.includes(tecla)) {
      //pantallaRef.current?.blur();
      // valorPrevio.current = valorPantalla;
      // operador.current = tecla;
      // esperandoOperando.current = true;
      dispatch({ tipo: "PRESIONAR_OPERADOR", operador: tecla });

    } else if (tecla === '=') {
      //pantallaRef.current?.blur();
      dispatch({ tipo: "CALCULAR_RESULTADO" });
      pantallaRef.current?.focus();

      // if (operador.current && !esperandoOperando.current) {
      //   const nuevoValor = eval(`${valorPrevio.current} ${operador.current} ${valorPantalla}`);
      //   setValorPantalla(Number.parseInt(nuevoValor));
      //   operador.current = null;
      //   esperandoOperando.current = false;
      //   pantallaRef.current?.focus();
      // }
    } else if (tecla === 'C') {
      //pantallaRef.current?.blur();
      dispatch({ tipo: "LIMPIAR" });
      // setValorPantalla('0');
      // operador.current = null;
      // esperandoOperando.current = false;
    }
  };

  return (
    <CalculadoraContext.Provider value={{ estado: estado.valorPantalla, presionarTecla, pantallaRef }}>
    <div style={styles.calculadora}>
      <Pantalla />
      <Teclado />
    </div>
    </CalculadoraContext.Provider>
  );
}


const styles = {
  calculadora: {
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  }
}


export default Calculadora;