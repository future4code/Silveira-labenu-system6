import { Request, Response } from "express";
import DocentesDataBase from "../data/DocentesDataBase";

async function getAllDocentes(req: Request, res: Response): Promise<void> {
    try {
        const docentesDB = new DocentesDataBase();

        const docentes = await docentesDB.getDocentes();

        res.status(200).send(docentes);
    } 
    catch(error:any) {
        res.status(500).send(error.message);
    };
};

export default getAllDocentes;