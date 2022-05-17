import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

export default mongoose.model('Usuario', usuarioSchema);