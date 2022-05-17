import Usuario from "../models/Usuario.js";
import Joi from "@hapi/joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/**
 * Data validation
 */
const credentialValidation = Joi.object({
  username: Joi.string().min(6).max(255).required(),
  password: Joi.string().min(6).max(100).required(),
});

/**
 * Adds a new user
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const newUser = async (req, res, next) => {
  //Validate the user data (min and required fields)
  const { error } = credentialValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  //Validate that the username is not taken
  const usernameExist = await Usuario.findOne({ username: req.body.username });
  if (usernameExist) {
    return res.status(400).json({ error: "Username is already taken" });
  }

  // encrypt the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  //Add the new user if validations are ok
  const usuario = new Usuario({
    ...req.body,
    password: password,
  });
  try {
    await usuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the user that matches with the id passed and update it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const updateUsuario = async (req, res, next) => {
  try {
    const user = await Usuario.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * Get the user that matches with the id passed and delete it
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const deleteUsuario = async (req, res, next) => {
  try {
    const user = await Usuario.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Get all users
 * @param {request} req
 * @param {response} res
 * @param {next} next
 */
export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find({});
    res.json({
      usuarios,
      mensaje: "Authorized",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Obtiene un user por correo (login)
/**
 * Get the user that matches username and pass adding a token auth
 * @param {request} req
 * @param {response} res
 * @param {next} next
 * @returns the user that matches username and pass
 */
export const login = async (req, res, next) => {
  try {
    // validations
    const { error } = credentialValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    //Username validation
    const user = await Usuario.findOne({ username: req.body.username });
    if (!user)
      return res.status(400).json({ error: "Username or  invalid" });

    //Password validation
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ error: " or password invalid" });

    // token
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.TOKEN_SECRET
    );

    res.header("Authorization", token).json({
      token,
      user,
    });
    // res.json({
    //     mensaje: "Ingreso correcto"
    // });
  } catch (error) {
    console.log(error);
    next();
  }
};
