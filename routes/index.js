import express from "express";
import { deleteCurso, getCurses, newCurso, updateCurso } from "../controllers/cursoController.js";
import { deleteCurso_Practica, getCurso_Practica, newCurso_Practica, updateCurso_Practica } from "../controllers/curso_practicaController.js";
import { deletePractica, getPracticas, newPractica, updatePractica } from "../controllers/practicaController.js";
import { deleteProfesor, getProfesores, newProfesor, updateProfesor } from "../controllers/profesorController.js";
import { deleteTema, getTemas, newTema, updateTema } from "../controllers/temaController.js";
import { deleteUsuario, getUsuarios, login, newUser, updateUsuario } from "../controllers/usuarioController.js";
import verifyToken from "../middlewares/validate-token.js";

const router = express.Router();

/**
 * Users CRUD
 */
router.post("/usuarios", newUser);
router.post("/login", login);
router.put("/usuarios/:id", verifyToken, updateUsuario);
router.delete("/usuarios/:id", verifyToken, deleteUsuario);
router.get("/usuarios", verifyToken, getUsuarios);

/**
 * Temas CRUD
 */
router.post("/temas", verifyToken, newTema);
router.put("/temas/:id", verifyToken, updateTema);
router.delete("/temas/:id", verifyToken, deleteTema);
router.get("/temas", verifyToken, getTemas);

/**
 * Profesores CRUD
 */
router.post("/profesores", verifyToken, newProfesor);
router.put("/profesores/:id", verifyToken, updateProfesor);
router.delete("/profesores/:id", verifyToken, deleteProfesor);
router.get("/profesores", verifyToken, getProfesores);

/**
 * Cursos CRUD
 */
router.post("/cursos", verifyToken, newCurso);
router.put("/cursos/:id", verifyToken, updateCurso);
router.delete("/cursos/:id", verifyToken, deleteCurso);
router.get("/cursos", verifyToken, getCurses);

/**
 * Practicas CRUD
 */
router.post("/practicas", verifyToken, newPractica);
router.put("/practicas/:id", verifyToken, updatePractica);
router.delete("/practicas/:id", verifyToken, deletePractica);
router.get("/practicas", verifyToken, getPracticas);

/**
 * Curso_Practica CRUD
 */
router.post("/curso-practicas", verifyToken, newCurso_Practica);
router.put("/curso-practicas/:id", verifyToken, updateCurso_Practica);
router.delete("/curso-practicas/:id", verifyToken, deleteCurso_Practica);
router.get("/curso-practicas", verifyToken, getCurso_Practica);


export default router;
