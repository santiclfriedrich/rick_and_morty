const app = require("./app") // eseta es la configuracion de nuestro server
const { conn } = require("./DB_connection") //esta es la config de nuestra base de datos

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
    console.log(`Server raised in port: ${PORT}`);
    await conn.sync({force:true})
});