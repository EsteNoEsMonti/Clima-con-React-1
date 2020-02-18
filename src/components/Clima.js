import React from 'react';

const Clima = ({resultado}) => {

    //console.log(resultado);
    //extraer lso valores
    const { name, main } = resultado;

    if (!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;

    console.log(resultado);
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>
                    El Clima de {name} es:
                </h2>
                <p className="temperatura">
                    Temperatura {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>

                <p>
                    Temperatura MAX: {parseInt(main.temp_max - kelvin, 10)} &#x2103;
                    {/* cuando pasando un parse int hau que pasarle el sistema decimal, en este caso base 10 */}
                </p>
                <p>
                    Temperatura MIN: {parseInt(main.temp_min - kelvin, 10)} &#x2103;
                    {/* cuando pasando un parse int hau que pasarle el sistema decimal, en este caso base 10 */}
                </p>

            </div>
        </div>
    );
}
 
export default Clima;