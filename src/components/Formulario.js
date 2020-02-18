import React, { useState } from 'react';

const Formulario = ({datosConuslta}) => {

    //con los Hoocks el state puede ser cualquier tipo de dato

    //Creando State del Componente
        //en vez de nombrar this.state y this.setState se le pone el nombre que quieramos 
    const [busqueda, guardarBusqueda] = useState({
        // state   , this.setState({})
        //aqui se define como va a iniciar el State
        ciudad: '',
        pais: ''
    })

    const consultarClima = (e) => {
        e.preventDefault();

        //pasar hacie el componente principal la busqueda del usuario (o sea, el this.state.ciudad y .pais)
        datosConuslta(busqueda);
    }


    const handleChange = (e) => {
        //Cambiar el State
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

        //console.log(busqueda);
    }

    return (
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />

                <label htmlFor="ciudad">Ciudad: </label>
                {/* usualmente colocas un For pero como es reservado a js se usa htmlFor
                La ventaja de esto es que cuando le das click en el label te activa el input */}
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Seleccina un País</option>
                    <option value="MX">Mexíco</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima"
                />
            </div>

        </form>
    );
}
 
export default Formulario;