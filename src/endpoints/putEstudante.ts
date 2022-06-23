import { Request, Response } from "express";
import EstudantesDataBase from "../data/EstudantesDataBase";

async function putEstudante(req: Request, res: Response): Promise<void> {
    try {
        const { turmaId, estudanteId} = req.body;

        if(!estudanteId || !turmaId){
            res.statusCode = 404
            throw new Error("Valor(es) do body não encontrado(s).");
        };

        const estudanteDB = new EstudantesDataBase();

        await estudanteDB.putEstudanteTurma( turmaId, estudanteId );

        res.status(201).send({message: "sucesso"});
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default putEstudante;