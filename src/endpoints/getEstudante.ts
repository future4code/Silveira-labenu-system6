import { Request, Response } from "express";
import EstudantesDataBase from "../data/EstudantesDataBase";

async function getEstudante(req: Request, res: Response): Promise<void> {
    try {
        const nome: string = req.params.nome;

        if(!nome){
            res.statusCode = 404
            throw new Error("O nome está vazio.");
        };

        const estudanteDB = new EstudantesDataBase();

        const estudante = await estudanteDB.getEstudanteByName(nome);

        res.status(200).send(estudante);

    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default getEstudante;