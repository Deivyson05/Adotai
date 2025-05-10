import { Router } from "express";
import adopterRoutes from "./adopter.routes.ts";
import ongRoutes from "./ong.routes.ts";

const router:Router = Router();

router.use('/adopter', adopterRoutes);
router.use('/ong', ongRoutes);

export default router;