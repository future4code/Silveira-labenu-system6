import { Request, Response } from "express";
import TurmaDataBase from "../data/TurmaDataBase";

async function getTurmas(req: Request, res: Response): Promise<void> {
    try {
        const turmasDB = new TurmaDataBase();

        const turmas = await turmasDB.getTurma();

        res.status(200).send(turmas);
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default getTurmas;