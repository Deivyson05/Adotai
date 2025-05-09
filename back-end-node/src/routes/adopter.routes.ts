import { Router } from "express";
import AdopterController from "../controllers/Adopter.controller.ts";

const router:Router = Router();

router.use('/register', AdopterController.createAdopter);

export default router;