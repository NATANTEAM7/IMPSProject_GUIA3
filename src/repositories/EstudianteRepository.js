const pool = require('../config/databaseController');

module.exports = {

    //COnsulta para obtener todos los estudiantes
    obtenerTodosLosEstudiantes: async() => {
        try {
            const result = await pool.query('SELECT * FROM estudiantes');
            return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de estudiantes', error);
        }
    },

    //Eliminar un estudiante
    eliminarEstudiante: async(idestudiante) => {
        try{
            const result = await pool.query('DELETE FROM estudiantes WHERE idestudiante = ?', [idestudiante]);
            return result.affectedRows > 0;
        }catch(error){
            console.error('Error al eliminar el registro', error);
        }
    },

        // Insertar un estudiante
        insertarEstudiante: async (estudianteData) => {
            try {
                const result = await pool.query('INSERT INTO estudiantes SET ?', estudianteData);
                return result.insertId;
            } catch (error) {
                console.error('Error al insertar el estudiante', error);
            }
        },
    
        // Actualizar un estudiante
        actualizarEstudiante: async (idestudiante, estudianteData) => {
            try {
                const result = await pool.query('UPDATE estudiantes SET ? WHERE idestudiante = ?', [estudianteData, idestudiante]);
                return result.affectedRows > 0;
            } catch (error) {
                console.error('Error al actualizar el estudiante', error);
            }
        }
}