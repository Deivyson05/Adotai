import { Request, Response } from "express";
import db from "../config/db.ts";
import createToken from "../core/token.ts";
import { comparePassword, hashPassword } from "../core/hash.ts";

class OngController {
    async function createOng(req:Request, res: Response) {
        
    }
}

export default new OngController();