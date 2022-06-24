import { Request, Response } from "express";
import DocentesDataBase from "../data/DocentesDataBase";

async function putDocente(req: Request, res: Response): Promise<void> {
    try {
        const { turmaId, docenteId} = req.body;

        if(!docenteId || !turmaId){
            res.statusCode = 404
            throw new Error("Valor(es) do body não encontrado(s).");
        };

        const docentesDB = new DocentesDataBase();

        await docentesDB.putDocenteTurma( turmaId, docenteId );

        res.status(201).send({message: "sucesso"});
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default putDocente;