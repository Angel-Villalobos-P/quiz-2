import mongoose from "mongoose";

const temaSchema = mongoose.Schema({
  tema: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Tema", temaSchema);
