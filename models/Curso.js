import mongoose from "mongoose";

const cursoSchema = mongoose.Schema({
  id_profesor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profesor",
  },
  materia: {
    type: String,
    required: true,
  },
  anno: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  carrera: {
    type: String,
    required: true,
  },
  horas_semanales: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Curso", cursoSchema);
