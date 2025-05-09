import { Router } from "express";
import adopterRoutes from "./adopter.routes.ts";

const router:Router = Router();

router.use('/adopter', adopterRoutes)

export default router;