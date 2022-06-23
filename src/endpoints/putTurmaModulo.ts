import { Request, Response } from "express";
import TurmaDataBase from "../data/TurmaDataBase";

async function putTurmaModulo(req: Request, res: Response): Promise<void> {
    try {
        const { modulo, turmaId } = req.body;

        if(!modulo || !turmaId){
            res.statusCode = 404
            throw new Error("Valor(es) do body não encontrado(s).");
        };

        const turmaDB = new TurmaDataBase();

        await turmaDB.putTurmaModulo( modulo, turmaId );

        res.status(201).send({message: "sucesso"});
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default putTurmaModulo;