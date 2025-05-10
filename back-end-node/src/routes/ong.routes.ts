import { Router } from "express";
import OngController from "../controllers/Ong.controller.ts";

const router:Router = Router();

router.use('/register', OngController.createAdopter);

export default router;