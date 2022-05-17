import mongoose from "mongoose";

const profesorSchema = mongoose.Schema({
  apellido_profesor: {
    type: String,
    required: true,
  },
  nombre_profesor: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Profesor", profesorSchema);
