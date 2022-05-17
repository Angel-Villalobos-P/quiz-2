import Profesor from "../models/Profesor.js";

/**
 * Adds a new Profesor
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const newProfesor = async (req, res, next) => {
  const profesor = new Profesor({
    ...req.body,
  });
  try {
    await profesor.save();
    res.status(200).json(profesor);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the Profesor that matches with the id passed and update it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const updateProfesor = async (req, res, next) => {
  try {
    const profesor = await Profesor.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(profesor);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the Profesor that matches with the id passed and delete it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const deleteProfesor = async (req, res, next) => {
  try {
    const profesor = await Profesor.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json(profesor);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Get all temas
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const getProfesores = async (req, res, next) => {
  try {
    const profesores = await Profesor.find({});
    res.json({
      profesores,
      mensaje: "Authorized",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
