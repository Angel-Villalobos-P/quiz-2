import Tema from "../models/Tema.js";

/**
 * Adds a new Tema
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const newTema = async (req, res, next) => {
  const tema = new Tema({
    ...req.body,
  });
  try {
    await tema.save();
    res.status(200).json(tema);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the Tema that matches with the id passed and update it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const updateTema = async (req, res, next) => {
  try {
    const tema = await Tema.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.json(tema);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the Tema that matches with the id passed and delete it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const deleteTema = async (req, res, next) => {
  try {
    const tema = await Tema.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json(tema);
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
export const getTemas = async (req, res, next) => {
  try {
    const temas = await Tema.find({});
    res.json({
      temas,
      mensaje: "Authorized",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
