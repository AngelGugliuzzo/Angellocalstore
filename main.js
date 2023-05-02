import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const formulario = document.querySelector('form');

const nombreInput = document.querySelector('#nombre');

const apellidoInput=document.querySelector('#apellido');

const edadInput = document.querySelector('#edad');

const eventoInput = document.querySelector('#nombreEvento');

const paisInput=document.querySelector('#pais');

const cantidadInput=document.querySelector('#cantDePersonas');

const guardarBtn = document.querySelector('#guardar');

const listaDePaises = document.querySelector('#listaDePaises');

const borrarBtn=document.querySelector('#borrar');

//las claves tienen que ser por cada item del form, nombre es una clave, apellido otra	
//apellidos	["gugliuzzo","lodbrok"]

// Guardar datos

const cargaDeDatos=()=>{

	const nombre = nombreInput.value;
	const apellido = apellidoInput.value;
	const edad = edadInput.value;
	const evento = eventoInput.value;
	const pais = paisInput.value;
	const cantidad = cantidadInput.value;

// validacionDeCampos(); si es correcto o incorrecto, no impacta en base con la funcion
	
	if (nombre==='' || apellido===''||edad===''||evento===''||pais===''||cantidad===''||edad<18){
			return alert(' Campos en blanco o edad menor a 18 años ');
	                                															}
	
	if (cantidad>50 && pais==='argentina'){ 
		return alert('Para Argentina el maximo de gente es de 50 pesonas');
										  }	

	if (cantidad>60 && pais==='chile'){ 
		return alert('Para Chile el maximo de gente es de 60 pesonas');
                                      }

	if (cantidad>70 && pais==='uruguay'){
		return alert('Para uruguay el maximo de gente es de 70 pesonas');
	                                    }

  let nombres = JSON.parse(localStorage.getItem('nombres')) || [];
		nombres.push(nombre);
		localStorage.setItem('nombres', JSON.stringify(nombres));	

  let apellidos = JSON.parse(localStorage.getItem('apellidos')) || [];
		apellidos.push(apellido)
   		localStorage.setItem('apellidos', JSON.stringify(apellidos));

	let edades = JSON.parse(localStorage.getItem('edades')) || [];
		edades.push(edad)
    	localStorage.setItem('edades', JSON.stringify(edades));

	let eventos = JSON.parse(localStorage.getItem('eventos')) || [];
		eventos.push(evento)
    	localStorage.setItem('eventos', JSON.stringify(eventos));

	let paises = JSON.parse(localStorage.getItem('paises')) || [];
		paises.push(pais)
    	localStorage.setItem('paises', JSON.stringify(paises));

	let cantidades = JSON.parse(localStorage.getItem('cantidades')) || [];
		cantidades.push(cantidad)
   		localStorage.setItem('cantidades', JSON.stringify(cantidades));
							     	};

 const borradoDeBase=()=>{
		localStorage.removeItem('nombres');
		localStorage.removeItem('apellidos');
		localStorage.removeItem('edades');
		localStorage.removeItem('eventos');
		localStorage.removeItem('paises');
		localStorage.removeItem('cantidades');
						};															
											

guardarBtn.addEventListener('click',()=>{
	cargaDeDatos();
                                        });
												
	//borrADO DE LA base
borrarBtn.addEventListener('click',()=> {	
		borradoDeBase();																																		
									    });	
										

//no funciono
const validacionDeCampos=()=>{
	if (nombre==='' || apellido===''||edad===''||evento===''||pais===''||cantidad===''||edad<18){
		return alert(' Campos en blanco o edad menor a 18 años ');
																							}

if (cantidad>50 && pais==='argentina'){ 
	return alert('Para Argentina el maximo de gente es de 50 pesonas');
									  }	

if (cantidad>60 && pais==='chile'){ 
	return alert('Para Chile el maximo de gente es de 60 pesonas');
								  }

if (cantidad>70 && pais==='uruguay'){
	return alert('Para uruguay el maximo de gente es de 70 pesonas');
									}

									};



	

	
	