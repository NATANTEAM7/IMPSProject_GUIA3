const express = require('express');

const morgan = require('morgan');
const exphbs = require('express-handlebars'); //Necesario para utilziar el moto de plantillas handlebars
const path = requiere('path');

// Inicializaciones
const app = express();

require('dotenv').config()

// Ajuste del servidor
app.set('port', process.env.PORT || 8000);

//Configuracion de rutas
//app.use(require('./routes')); //Node automaticamente busca el index.js del modulo

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
});

app.set('views', path.join(__dirname, 'views'));//Configuracion de la ruta donde se encuentran las vistas
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', //Configuracion del layout principal
    layoutsDir: path.join(app.get('views'), 'layouts'), //Configuración de la ruta de los layouts
    extname: '.hbs' // Configura la extención que tendran los archivos HandleBars
}));

app.set('view engine', 'hbs'); //Configuración para ejecutar el motor de plantillas

app.use(morgan('dev')); // Configurando el middleware morgan para visualizar que esta llegando al servidor

app.use(express.urlencoded({extended: false})); //Sirve para poder aceptar datos desde formularios

//Configuración de rutas
app.use(require('./routes')); //Node automáticamente busca el index.js del modulo

app.use('/estudiantes', require('./routes/estudiantes')); //Configuración de ruta para estudiantes

//Archivos públicos (aca se coloca todo el código al cual el navegador puede acceder)
app.use(express.static(path.join(__dirname, 'public')));

//Inicia el servidor
app.listen(app.get('port'), () => {
    console.log('servidor iniciado en el puerto: ', app.get('port'));
});