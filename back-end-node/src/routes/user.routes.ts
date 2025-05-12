import { Router, Request, Response } from "express";
import adopterRoutes from "./adopter.routes.ts";
import ongRoutes from "./ong.routes.ts";
import db from "../config/db.ts";
import { comparePassword, hashPassword } from "../core/hash.ts";

const router:Router = Router();

async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.sendStatus(400);
    }

    try {
        const client = await db();

        const user = await client.query('SELECT user_senha, user_token, tipo_id FROM Usuarios WHERE user_email = $1', [email]);
        if (!user.rows[0]) {
            return res.sendStatus(404);
        }

        const isValidPassword = await comparePassword(password, user.rows[0].user_senha);
        if (!isValidPassword) {
            return res.sendStatus(401);
        }

        return res.status(200).json({ token: user.rows[0].user_token, type: user.rows[0].tipo_id });
    } catch (error) {
        res.sendStatus(500);
    }
}

router.use('/adopter', adopterRoutes);
router.use('/ong', ongRoutes);
router.use('/login', login);

export default router;