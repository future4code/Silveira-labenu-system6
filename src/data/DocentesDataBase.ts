import DocenteModel from "../model/DocenteModel";
import { BaseDatabase } from "./BaseDatabase";

class DocentesDataBase extends BaseDatabase {
    public async insert(docente: DocenteModel) {
        try {
            await BaseDatabase.connection("DOCENTE")
                .insert({
                    "id": docente.getId(),
                    "nome": docente.getNome(),
                    "email": docente.getEmail(),
                    "data_nasc": docente.getDataNasc(),
                    "turma_id": docente.getTurmaId(),
                    "especialidades": docente.getEspecialidades()
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async getDocentes() {
        try {
            await BaseDatabase.connection("DOCENTE")
                .select("*");
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async putDocenteTurma(turma: string, id: string){
        try {
            await BaseDatabase.connection("DOCENTE")
                .update("turma_id", turma)
                .where("id", id);
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
};

export default DocentesDataBase;