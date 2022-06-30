import { Docente } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

class DocentesDataBase extends BaseDatabase {
    public async insert(docente: Docente) {
        try {
            let especialidades: string[] = docente.getEspecialidades();

            await BaseDatabase.connection("DOCENTE")
                .insert({
                    "id": docente.getId(),
                    "nome": docente.getNome(),
                    "email": docente.getEmail(),
                    "data_nasc": docente.getDataNasc(),
                    "turma_id": docente.getTurmaId(),
                    "especialidades": docente.getEspecialidades()
                });
            
            for (let i = 0; i < especialidades.length; i++) {
                await BaseDatabase.connection("DOCENTE_ESPECIALIDADE")
                    .insert({
                        "id": Math.floor(Date.now() * Math.random()).toString(36),
                        "docente_id": docente.getId(),
                        "especialidade_id": especialidades[i]
                    });
            };
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async getDocentes() {
        try {
            const result = await BaseDatabase.connection("DOCENTE")
                .select("*");
            return result;
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async putDocenteTurma(turma: string, id: string){
        try {
            await BaseDatabase.connection("DOCENTE")
                .update("turma_id", turma)
                .where("id", id);
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
};

export default DocentesDataBase;