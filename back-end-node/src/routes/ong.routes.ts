import { Router } from "express";
import OngController from "../controllers/Ong.controller.ts";
import multer from "multer";

import { storage } from '../multerConfig.ts';
const upload = multer({ storage: storage });

const router:Router = Router();


router.post('/register', OngController.createOng);
router.post('/new-pet', upload.single('image'), OngController.createPet);
router.post('/pets', OngController.getPets);

export default router;