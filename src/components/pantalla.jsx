import React from "react";
import { useContext } from "react";
import CalculadoraContext from '../CalculadoraContext';

function Pantalla(){

    const {valorPantalla} = useContext(CalculadoraContext);

    return(
        <div style={styles.Pantalla}>{valorPantalla}</div>
    )

}

  const styles = {
        Pantalla: {
            border: '5px solid #ddd',
            padding: '20px',
            marginBottom: '10px',
            textAlign: 'right',
            fontSize: '2rem',
        }
    };

export default Pantalla