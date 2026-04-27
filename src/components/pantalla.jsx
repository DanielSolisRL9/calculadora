import React from "react";
import { useContext, useState } from "react";
import CalculadoraContext from '../CalculadoraContext';

function Pantalla(){
    const [enfocado, setEnfocado] = useState(false);
    const {estado, pantallaRef} = useContext(CalculadoraContext);

    return(
        <input 
        style={enfocado ? styles.enfocado : styles.desenfocado} 
        value={estado} 
        ref={pantallaRef} 
        readOnly 
        onFocus={() => setEnfocado(true)} 
        onBlur={() => setEnfocado(false)} 
        />
    )

}

  const styles = {
        Pantalla: {
            border: '5px solid #ddd',
            padding: '20px',
            marginBottom: '10px',
            textAlign: 'right',
            fontSize: '2rem',
        },

        enfocado: {
            border: '5px solid #007BFF',
            backgroundColor: '#2c7d46',
            padding: '50px 30px',
            marginBottom: '10px',
            textAlign: 'right',
            fontSize: '7rem',
        },

        desenfocado: {
            border: '5px solid #ddd',
            padding: '50px 30px',
            marginBottom: '10px',
            textAlign: 'right',
            fontSize: '7rem',
        }
    };

export default Pantalla