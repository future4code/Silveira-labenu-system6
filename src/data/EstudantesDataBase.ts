import { Estudante } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

class EstudantesDataBase extends BaseDatabase {
    public async insert(estudante: Estudante) {
        try {
            let hobbies: string[] = estudante.getHobbies();

            await BaseDatabase.connection("ESTUDANTE")
                .insert({
                    "id": estudante.getId(),
                    "nome": estudante.getNome(),
                    "email": estudante.getEmail(),
                    "data_nasc": estudante.getDataNasc(),
                    "turma_id": estudante.getTurmaId()
                });

            for (let i = 0; i < hobbies.length; i++) {
                let nome = await BaseDatabase.connection("HOBBY").select("nome").where("nome", hobbies[i]);
                if(!nome){
                    await BaseDatabase.connection("HOBBY")
                        .insert({
                            "id": Math.floor(Date.now() * Math.random()).toString(36),
                            "nome": hobbies[i]
                        });
                }

                let id = await BaseDatabase.connection("HOBBY")
                    .select("id")
                    .where("nome", hobbies[i]);
                
                await BaseDatabase.connection("ESTUDANTE_HOBBY")
                    .insert({
                        "id": Math.floor(Date.now() * Math.random()).toString(36),
                        "estudante_id": estudante.getId(),
                        "hobby_id": id[0].id
                    });
            };
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };

    public async getEstudanteByName(nome: string) {
        try {
            const result = await BaseDatabase.connection("ESTUDANTE")
                .select("*")
                .where("nome", "LIKE", nome);
            return result
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
    
    public async putEstudanteTurma(turmaId: string, id: string){
        try {
            await BaseDatabase.connection("ESTUDANTE")
                .update("turma_id", turmaId)
                .where("id", id);
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage);
        };
    };
};

export default EstudantesDataBase;