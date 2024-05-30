const app = require("./src/app");
const { conn } = require("./src/db");

conn
  .sync({ force: false })
  .then(() => {
    console.log("Base de datos sincronizada correctamente.");
    app.listen(3001, () => {
      console.log("Server listening in port 3001");
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
