const express = require("express");
const router = express.Router();

const {
  crearEnvio,
  eliminarEnvio,
  enviosActivos,
  actualizarEnvio,
  buscarPorId,
  listarEnvios,
} = require("../controllers/envio.controller");

router.post("/", crearEnvio);
router.get("/", listarEnvios);
router.get("/activos", enviosActivos);
router.get("/:id", buscarPorId);
router.put("/:id", actualizarEnvio);
router.delete("/:id", eliminarEnvio);

module.exports = router;
