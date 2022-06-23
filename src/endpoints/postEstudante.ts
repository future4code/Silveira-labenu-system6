import { Request, Response } from "express";
import EstudantesDataBase from "../data/EstudantesDataBase";
import UsuarioModel from "../model/types";

async function postEstudante(req: Request, res: Response): Promise<void> {
    try {
        const {nome, email, dataNasc, turmaId} = req.body;

        const id: string = Math.floor(Date.now() * Math.random()).toString(36);

        if(!nome || !email || dataNasc || turmaId){
            res.statusCode = 404
            throw new Error("Valor(es) do body não encontrado(s).");
        };

        const estudanteDB = new EstudantesDataBase();

        const estudanteDados = new UsuarioModel(id, nome, email, dataNasc, turmaId);

        await estudanteDB.insert(estudanteDados);

        res.status(201).send({message: "sucesso"});
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default postEstudante;