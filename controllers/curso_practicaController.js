import Curso_Practica from "../models/Curso_Practica.js";

/**
 * Adds a new curso_Practica
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const newCurso_Practica = async (req, res, next) => {
  const curso_Practica = new Curso_Practica({
    ...req.body,
  });
  try {
    await curso_Practica.save();
    res.status(200).json(curso_Practica);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the curso_Practica that matches with the id passed and update it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const updateCurso_Practica = async (req, res, next) => {
  try {
    const curso_Practica = await Curso_Practica.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(curso_Practica);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the curso_Practica that matches with the id passed and delete it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const deleteCurso_Practica = async (req, res, next) => {
  try {
    const curso_Practica = await Curso_Practica.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(curso_Practica);
  } catch (error) {
    console.log(error);
    next();
  }
};
/** Get all Curso_Practica
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const getCurso_Practica = async (req, res, next) => {
  try {
    const curso_practicas = await Curso_Practica.find({})
      .populate("id_curso")
      .populate("id_practica")
      .exec();
    res.json({
      curso_practicas,
      mensaje: "Authorized",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
