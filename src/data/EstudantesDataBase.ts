import UsuarioModel from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

class EstudantesDataBase extends BaseDatabase {
    public async insert(estudante: UsuarioModel) {
        try {
            await BaseDatabase.connection("ESTUDANTE")
                .insert({
                    "id": estudante.getId(),
                    "nome": estudante.getNome(),
                    "email": estudante.getEmail(),
                    "data_nasc": estudante.getDataNasc(),
                    "turma_id": estudante.getTurmaId()
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async getEstudanteByName(nome: string) {
        try {
            await BaseDatabase.connection("ESTUDANTE")
                .select("*")
                .where("nome", "LIKE", nome);
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async putEstudanteTurma(turmaId: string, id: string){
        try {
            await BaseDatabase.connection("ESTUDANTE")
                .update("turma_id", turmaId)
                .where("id", id);
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
};

export default EstudantesDataBase;