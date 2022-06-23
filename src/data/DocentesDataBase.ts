import UsuarioModel from "../model/UsuarioModel";
import { BaseDatabase } from "./BaseDatabase";

class DocentesDataBase extends BaseDatabase {
    public async insert(docente: UsuarioModel) {
        try {
            await BaseDatabase.connection("DOCENTE")
                .insert({
                    "id": docente.getId(),
                    "nome": docente.getNome(),
                    "email": docente.getEmail(),
                    "data_nasc": docente.getDataNasc(),
                    "turma_id": docente.getTurmaId()
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