// Aca deberia ir el codigo que levanta el servidor y sincroniza la db
const app = require("./src/app");
const { conn } = require("./src/database");

conn
  .sync({ force: true })
  .then(() => {
    console.log("Base de datos sincronizada correctamente.");
    app.listen(3001, () => {
      console.log("Server listening in port 3001");
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

// const startServer = async () => {
//   try {
//     await sequelize.sync();
//     console.log("Base de datos sincronizada correctamente.");
//     app.listen(3001, () => {
//       console.log("Server listening in port 3001");
//     });
//   } catch (error) {
//     console.error("Error al sincronizar la base de datos:", error);
//   }
// };

// startServer();
