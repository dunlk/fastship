const mongoose = require("mongoose");

const envioSchema = new mongoose.Schema(
  {
    pedidoId: { type: String, require: true, unique: true, trim: true },
    remitetente: { type: String, require: true, trim: true },
    destinatario: { type: String, require: true, trim: true },
    direccionEntrega: { type: String, require: true, trim: true },
    estado: {
      type: String,
      enum: ["pendiente", "en tránsito", "entregado"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Envio", envioSchema);
