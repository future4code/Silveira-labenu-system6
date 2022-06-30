import { Request, Response } from "express";
import DocentesDataBase from "../data/DocentesDataBase";
import { Docente } from "../model/types";

async function postDocente(req: Request, res: Response): Promise<void> {
    try {
        const {nome, email, dataNasc, turmaId} = req.body;
        let especialidade: string[] = req.body.especialidade;
        const id: string = Math.floor(Date.now() * Math.random()).toString(36);

        const dataAux = dataNasc.split("/",3);
        const data = `${dataAux[2]}/${dataAux[1]}/${dataAux[0]}`;

        if(!nome || !email || !dataNasc || !turmaId || !especialidade){
            res.statusCode = 404;
            throw new Error("Valor(es) do body não encontrado(s).");
        };

        for (let i = 0; i < especialidade.length; i++) {
            switch (especialidade[i].toLowerCase()) {
                case "js":
                        especialidade[i] = "001";
                    break;
                case "css":
                        especialidade[i] = "002";
                    break;
                case "react":
                        especialidade[i] = "003";
                    break;
                case "typescript":
                        especialidade[i] = "004";
                    break;
                case "poo":
                        especialidade[i] = "005";
                    break;
                default:
                    res.statusCode = 404;
                    throw new Error("especialidade precisa estar dentro dos parâmetros.");
            };
        };

        const docenteDB = new DocentesDataBase();

        const docente = new Docente(id, nome, email, data, turmaId, especialidade);

        await docenteDB.insert(docente);

        res.status(201).send({message: "sucesso"});
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default postDocente;