//instancia de express, para manejar rutas direccionamiento mas facilmente
const express = require('express')
const app = express();
//define el puerto en se realizaran las solicitudes puerto 3000 en este caso
const port = 3000;
//Middleware que permite parsear el cuerpo de las solicitudes POST, utilizando urlencoded
//extenden: true permite analizar datos mas complejos, como objetos anidados
app.use(express.urlencoded({extended: true}));
//defino ruta para pagina principal ("/")
app.get('/', (req, res) => {
    //envia el formulario una vez estemos en la raiz
    res.sendFile(__dirname + '/formulario.html');
})
// definimos ruta POST
app.post('/submit', (req, res) => {
    //recoge los datos enviados en el cuerpo de la solicitud y los almacena en datos
    const datos = req.body
    //muestra los datos de la consola
    console.log(datos);
    //envia una respuesta al cliente comfirmando que los datos fueron recibidos
    res.send('Datos recibidos' + JSON.stringify(datos));
})
// iniciamos el servidor para que escuche el puerto 3000
app.listen(port, () => {
    //Muestra en la consola mensaje de que el servidor esta corriendo
    console.log(`servidor corriendo en http://localhost:${port}`);
})


