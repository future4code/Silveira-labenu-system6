import { Request, Response } from "express";
import EstudantesDataBase from "../data/EstudantesDataBase";
import { Estudante } from "../model/types";

async function postEstudante(req: Request, res: Response): Promise<void> {
    try {
        const {nome, email, dataNasc, turmaId} = req.body;
        let hobbies: string[] = req.body.hobbies;
        const id: string = Math.floor(Date.now() * Math.random()).toString(36);

        const dataAux = dataNasc.split("/",3);
        const data = `${dataAux[2]}/${dataAux[1]}/${dataAux[0]}`;

        if(!nome || !email || !dataNasc || !turmaId || !hobbies){
            res.statusCode = 404
            throw new Error("Valor(es) do body não encontrado(s).");
        };

        const estudanteDB = new EstudantesDataBase();

        const estudanteDados = new Estudante(id, nome, email, data, turmaId, hobbies);

        await estudanteDB.insert(estudanteDados);

        res.status(201).send({message: "sucesso"});
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default postEstudante;