import React, { useState, useEffect } from 'react';
//los ciclos de vida se reemplazan por useEffect

import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


function App() {

	//State Principal
	//ciudad = state, guardarCiudad = this.setState()
	const [ciudad, guardarCiudad] = useState('');
	const [pais, guardarPais] = useState('');
	//otra pieza de state
	const [error, guardarError] = useState(false);
	const [resultado, guardarResultado] = useState({});

	useEffect(() => {
		//preveneir la ejecicion
		if (ciudad === '') return;

		//Consultar a la API
		const consultarAPI = async () => {

			const appId = '9d6493b2a41f02799ef43ae304da5970';

			const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

			//consultar url
			const respuesta = await fetch(url);
			const resultado = await respuesta.json();
			//console.log(resultato)

			guardarResultado(resultado);
		}

		consultarAPI();

	}, [ciudad, pais]);
	//arreglo de dependencias

	//creamos un metodo q va a ser la funcion que pasaremos a Formulario para tomar los datos del Formulario
	//hacia este otro componente
	const datosConuslta = (datos) => { //va a tomar "datos", o sea, lo que el usuario desea buscar
		//console.log(datos);
		//Validar que ambos campos esten
		if (datos.ciudad === '' || datos.pais === '') {
			//un error
			guardarError(true);
			return;
		}

		//ciudad y pais existen
		guardarCiudad(datos.ciudad);
		guardarPais(datos.pais);
		guardarError(false);
	}


	//Cargar un Componente CONDICIONALMENTE: se cunple una condicion se carga un componente, se cumple otra condicion y se carga otro componente
	let componente;
	if (error) { //if error === true
		//hay un error, mostrarlo
		componente = <Error mensaje="Ambos campos son obligatorios" />

	} else if (resultado.cod === "404") {
		//cuando la ciudad no existe
		componente = <Error mensaje="La ciudad no existe en el registro de la API"/>

	} else {
		//Mostrar el clima
		componente = 
			<Clima
				resultado={resultado} //seria el reusltado que le consultamos a la api
			/>;
	}

	return (
		<div className="App">
			<Header
				titulo="Monti Clima ReactAPP"
			/>

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Formulario
								datosConuslta={datosConuslta}
							/>
						</div>

						<div className="col s12 m6">
							{componente}
						</div>
					</div>
				</div>
			</div>

		</div>

	);
}

export default App;
