const express = require("express")

const app = express()

const PORT = 3000

//Hacer que el contenido de public esté disponible
app.use(express.static("public"))

//Primera ruta
app.get("/home", (request, response, next)=>{
    response.sendFile(__dirname + `/views/home-page.html`)
});

//Nueva ruta

app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + `/views/cat-page.html`)
  });

//Iniciar servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando al puerto ${PORT}`)
})

