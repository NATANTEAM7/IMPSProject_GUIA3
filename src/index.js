const express = require('express');

// Inicializaciones
const app = express();

// Ajuste del servidor
app.set('port', process.env.PORT || 8000);

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
});