const express = require('express');
const router = express.Router();
const queries = require('../repositories/EstudianteRepository');

// Enpoint para mostrar todos los estudiantes
router.get('/', async (express, response) => {
    const estudiantes = await queries.obtenerTodosLosEstudiantes();

    response.render('estudiantes/listado', {estudiantes});//Mostramos el listado de estudiantes

});

//Endpoint que permite mostrar el formulario para agregar un nuevo estudiante
router.get('/agregar', async(request, response) => {
    //Renderizamos el formulario
    response.render('estudiantes/agregar');
});

//Endpoint para agregar un estudiante
router.post('/agregar', async(request, response) => {
    //Falta agregar logica
});

//Endpoint que permite eliminar un estudiante
router.get('/eliminar/:idestudiante', async(request, response) => {
    //Desestructuramos el objeto que nos mandan en la petición y extraemos el idestudiante
    const { idestudiante } = request.params;
    const resultado = await queries.eliminarEstudiante(idestudiante);
    if(resultado > 0){
        console.log('Eliminado con éxito');
    }
    response.redirect('/estudiantes');
});

module.exports = router;