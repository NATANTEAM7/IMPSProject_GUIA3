const express = require('express');
const router = express.Router();
const queries = require('../repositories/CarreraRepository');

// Enpoint para mostrar todos los carreras
router.get('/', async (express, response) => {
    const carrera = await queries.obtenerTodasLasCarreras();

    response.render('carreras/listado', {carrera});//Mostramos el listado de carreras

});

//Endpoint que permite mostrar el formulario para agregar un nuevo carreras
router.get('/agregar', async(request, response) => {
    //Renderizamos el formulario
    response.render('carreras/agregar');
});

//Endpoint para agregar un carrera
router.post('/agregar', async(request, response) => {
    //Falta agregar logica
});

//Endpoint que permite eliminar un carrera
router.get('/eliminar/:idcarrera', async(request, response) => {
    //Desestructuramos el objeto que nos mandan en la petición y extraemos el idcarrera
    const { idcarrera } = request.params;
    const resultado = await queries.eliminarCarrera(idcarrera);
    if(resultado > 0){
        console.log('Eliminado con éxito');
    }
    response.redirect('/carreras');
});

module.exports = router;