import Practica from "../models/Practica.js";

/**
 * Adds a new Practica
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const newPractica = async (req, res, next) => {
  const practica = new Practica({
    ...req.body,
  });
  try {
    await practica.save();
    res.status(200).json(practica);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the Practica that matches with the id passed and update it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const updatePractica = async (req, res, next) => {
  try {
    const practica = await Practica.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(practica);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the Practica that matches with the id passed and delete it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const deletePractica = async (req, res, next) => {
  try {
    const practica = await Practica.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(practica);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Get all practicas
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const getPracticas = async (req, res, next) => {
  try {
    const practicas = await Practica.find({});
    res.json({
      practicas,
      mensaje: "Authorized",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
