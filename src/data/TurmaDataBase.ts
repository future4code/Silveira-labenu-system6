import { Turma } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

class TurmaDataBase extends BaseDatabase {
    public async insert(turma: Turma) {
        try {
            await BaseDatabase.connection("TURMA")
                .insert({
                    "id": turma.getId(),
                    "nome": turma.getNome()
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async getTurma() {
        try {
            const result = await BaseDatabase.connection("TURMA")
                .select("*")
                .where("modulo", ">", "0")
                .andWhere("modulo", "<", "7");

            return result;
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async putTurmaModulo(modulo: string, turmaId: string){
        try {
            await BaseDatabase.connection("TURMA")
                .update("modulo", modulo)
                .where("id", turmaId);
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
};

export default TurmaDataBase;