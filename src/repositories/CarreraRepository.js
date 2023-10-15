const pool = require('../config/databaseController');

module.exports = {
    // Consulta para obtener todas las carreras
    obtenerTodasLasCarreras: async () => {
        try {
            const result = await pool.query('SELECT * FROM carreras');
            return result;
        } catch (error) {
            console.error('Ocurrió un problema al consultar la lista de carreras', error);
        }
    },

    // Eliminar una carrera
    eliminarCarrera: async (idcarrera) => {
        try {
            const result = await pool.query('DELETE FROM carreras WHERE idcarrera = ?', [idcarrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al eliminar la carrera', error);
        }
    },

    // Insertar una nueva carrera
    insertarCarrera: async (carreraData) => {
        try {
            const result = await pool.query('INSERT INTO carreras SET ?', carreraData);
            return result.insertId;
        } catch (error) {
            console.error('Error al insertar la carrera', error);
        }
    },

    // Actualizar una carrera
    actualizarCarrera: async (idcarrera, carreraData) => {
        try {
            const result = await pool.query('UPDATE carreras SET ? WHERE idcarrera = ?', [carreraData, idcarrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al actualizar la carrera', error);
        }
    }
}
