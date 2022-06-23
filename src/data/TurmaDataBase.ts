import { BaseDatabase } from "./BaseDatabase";

class TurmaDataBase extends BaseDatabase {
    public async insert(turma: {id: string, nome: string}) {
        try {
            await BaseDatabase.connection("TURMA")
                .insert({
                    "id": turma.id,
                    "nome": turma.nome
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async getTurma() {
        try {
            await BaseDatabase.connection("TURMA")
                .select("*")
                .where("modulo", ">", "0")
                .andWhere("modulo", "<", "7");
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    public async putTurmaModulo(modulo: number, turmaId: string){
        try {
            await BaseDatabase.connection("TURMA")
                .update("modulo", modulo)
                .where("turma_id", turmaId);
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
};

export default TurmaDataBase;