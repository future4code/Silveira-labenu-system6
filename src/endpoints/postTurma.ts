import { Request, Response } from "express";
import TurmaDataBase from "../data/TurmaDataBase";
import { Turma } from "../model/types";

async function postTurma(req: Request, res: Response): Promise<void> {
    try {
        const {nome} = req.body;

        const id: string = Math.floor(Date.now() * Math.random()).toString(36);

        if(!nome){
            res.statusCode = 404
            throw new Error("O nome está vazio.");
        };

        const turmaDB = new TurmaDataBase();

        const turmaDados = new Turma( id, nome );

        await turmaDB.insert(turmaDados);

        res.status(201).send({message: "sucesso"});
    }
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default postTurma;