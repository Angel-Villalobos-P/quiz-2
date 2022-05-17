import mongoose from "mongoose";

const practicaSchema = mongoose.Schema({
  id_tema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tema",
  },
  description: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Practica", practicaSchema);
