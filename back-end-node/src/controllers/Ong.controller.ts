import { Request, Response } from "express";
import db from "../config/db.ts";
import createToken from "../core/token.ts";
import { comparePassword, hashPassword } from "../core/hash.ts";

class OngController {
    async createOng(req: Request, res: Response) {
        const {
            about,
            address,
            organization,
            login
        } = req.body;

        if (
            !about ||
            !address ||
            !organization ||
            !login
        ) {
            return res.sendStatus(400);
        }

        try {
            const client = await db();
            await client.query(`
                    INSERT INTO Usuarios (
                        user_id,
                        tipo_id,
                        user_nome,
                        user_telefone,
                        user_email,
                        user_senha,
                        user_token,
                        user_img_url
                    ) VALUES (
                        $1, $2, $3, $4, $5, $6, $7, $8
                    )
                    `, [
                about.cpf,
                1,
                about.name,
                about.phone,
                login.email,
                await hashPassword(login.password),
                createToken(),
                'https://imgs.search.brave.com/awksT_Zoh8G9Qn5d-CbZP4gAPcl0EDxLP0J88fgAnB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/ODA1MTU2L3ZlY3Rv/ci9wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2t2TERDZ3NI/SC04SGVRZTdKc2po/bE9ZNnZSQkprX3NL/VzlseWFMZ21Mbz0'
            ]);

            await client.query(`
                        INSERT INTO Ong (
                            user_id,
                            ong_nome,
                            ong_cnpj,
                            ong_validado,
                            ong_site,

                        ) VALUES (
                            $1, $2, $3, $4, $5
                        )
                        
                    `, [
                about.cpf,
                organization.name,
                organization.cpfOrCnpj,
                organization.description,
            ]);

            await client.query(`
                INSERT INTO Endereco (
                    user_id,
                    end_cep,
                    end_estado,
                    end_cidade,
                    end_bairro,
                    end_rua,
                    end_numero,
                    end_complemento
                ) VALUES (
                    $1, $2, $3, $4, $5, $6, $7, $8
                )
            `, [
                about.cpf,
                address.cep,
                address.state,
                address.city,
                address.neighborhood,
                address.street,
                address.number,
                address.complement
            ]);

        } catch (error) {
            console.error(error)
            return res.sendStatus(400);
        }
        return res.sendStatus(200);
    }

    async createPet(req: Request, res: Response) {
        try {
            const OngId = await client.query(`
                SELECT ong_id FROM ong WHERE user_id = $1
            `, [about.cpf]);
        }
        catch (error) {
            console.error(error)
            return res.sendStatus(400)
        }
        return res.sendStatus(400)
    }
}

export default new OngController();