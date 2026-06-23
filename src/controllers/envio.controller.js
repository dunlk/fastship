const Envio = require("../models/envio.model");

const crearEnvio = async (req, res) => {
  try {
    const envio = await Envio.create(req.body);
    res.status(201).json(envio);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al registrar envio", error: error.message });
  }
};

const listarEnvios = async (req, res) => {
  try {
    const envios = await Envio.find();
    res.json(envios);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al listar envios", error: error.message });
  }
};

const buscarPorId = async (req, res) => {
  try {
    const envio = await Envio.findById(req.params.id);

    if (!envio) {
      return res.status(404).json({ message: "Envio no encontrado" });
    }

    res.json(envioPorId);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar envio", error: error.message });
  }
};

const enviosActivos = async (req, res) => {
  try {
    const envios = await Envio.find({
      estado: { $in: ["pendiente", "en tránsito"] },
    });

    res.json(envios);
  } catch (error) {
    res.status(500).json({
      message: "Error al listar envios activos",
      message: error.message,
    });
  }
};

const actualizarEnvio = async (req, res) => {
  try {
    const envio = await Envio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!envio) {
      return res.status(404).json({ message: "Envio no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar envio", error: message });
  }
};

const eliminarEnvio = async (req, res) => {
  try {
    const envio = await Envio.findByIdAndDelete(id);

    if (!envio) {
      return res.status(404).json({ message: "Envio no encontrado" });
    }

    res.json({ message: "Envio eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar envio", error: error.message });
  }
};

module.exports = {
  crearEnvio,
  listarEnvios,
  buscarPorId,
  enviosActivos,
  actualizarEnvio,
  eliminarEnvio,
};
