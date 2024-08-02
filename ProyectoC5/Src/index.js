//const express = require('express');
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const { Session } = require('inspector');
const path = require('path');

//inicializacion
const app = express();
require('./database');

//para cargar en el postman
app.get('/listado', (req,res)=>{
res.send('hola desde la ruta listado')
});



//setting
 app.set('port',3000);
 app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

 

 //middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(methodOverride('_method')); 
app.use (session({
    secret: 'mysecreptapp',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static('public'));

 // Ruta para servir la página EJS
 app.get('/', (req, res) => {
    res.render('docentes'); // Renderiza el archivo index.ejs
  });

 //cargar ruta del api1docente
 app.use(require('./Routes/docentes'));


 //server activo 
 
 app.listen(app.get('port'), ()=>{
console.log('Servidor Activo:', app.get('port'));
})