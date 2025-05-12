import { Router } from "express";
import userRoutes from "./user.routes.ts";
import imgRoutes from "./img.routes.ts";

const router:Router = Router();

router.use('/user', userRoutes);
router.use('/img', imgRoutes);

export default router;