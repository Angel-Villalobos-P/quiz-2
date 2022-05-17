import Curso from "../models/Curso.js";
// import Profesor from "../models/Profesor";

/**
 * Adds a new curse
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
export const newCurso = async(req, res, next) => {
    const curso = new Curso({
        ...req.body,
    })
    try {
        await curso.save();
        res.status(200).json(curso)
    } catch (error) {
        console.log(error);
        next()
    }
};

/**
 * Get the curso that matches with the id passed and update it
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
export const updateCurso = async (req, res, next) => {
   try {
        const curso = await Curso.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        });
         res.status(200).json(curso)
    } catch (error) {
        console.log(error);
        next();
    }
};

/**
 * Get the curse that matches with the id passed and delete it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const deleteCurso = async (req, res, next) => {
  try {
    const curso = await Curso.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(curso);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get all curses 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
export const getCurses = async (req, res, next) => {
    try {
        const curses = await Curso.find({});
        res.json({
            curses,
            mensaje: "Authorized"
        });
    } catch (error) {
        console.log(error);
        next();
    }
}