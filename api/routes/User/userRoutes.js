import express from "express";
import { verifyToken } from "../../middleware/jwtMiddleware.js";
import {
  changePassword,
  changeUsername,
  updateEmail,
  getCurrentUser,
} from "../../controllers/User/userController.js";

const router = express.Router();

// Récupérer l'utilisateur connecté
router.get("/me", verifyToken, getCurrentUser);

// Modifier le mot de passe
router.put("/password", verifyToken, changePassword);

// Modifier le nom d'utilisateur
router.put("/username", verifyToken, changeUsername);

// Modifier l'email
router.put("/email", verifyToken, updateEmail);

export default router;
