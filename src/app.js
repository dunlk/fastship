const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const envioRoutes = require("./routes/envios.route");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

conectarDB();

app.use(cors());
app.use(express.json());

app.use("/api/envios", envioRoutes);

app.get("/", (req, res) => {
  res.send("Hola mundo desde backend");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
