import mongoose from "mongoose";

const curso_practicaSchema = mongoose.Schema({
  id_practica: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Practica",
  },
  id_curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Curso",
  },
  horas: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  ayudante: {
    type: String,
    required: true,
  },
  grupos: {
    type: String,
    required: true,
  },
  caracter: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Curso_Practica", curso_practicaSchema);
