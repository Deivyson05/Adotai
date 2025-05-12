import { Router } from "express";
import express from "express";

const router:Router = Router();

router.use('/', express.static('uploads'));

export default router;