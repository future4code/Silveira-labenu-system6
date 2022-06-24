export class Turma {
    constructor (
        private id: string,
        private nome: string,
        private modulo?: string
    ) {}

    public getId(): string {
        return this.id
    }

    public getNome(): string {
        return this.nome
    }

    public getModulo(): string {
        return !this.modulo ? "0" : this.modulo;
    }
}


export abstract class Usuario {
    protected id: string;
    protected nome: string;
    protected email: string;
    protected dataNasc: string;
    protected turmaId: string;

    constructor(
        id: string,
        nome: string,
        email: string,
        dataNasc: string,
        turmaId: string
    ){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataNasc = dataNasc;
        this.turmaId = turmaId;
    };

    public getId(){
        return this.id;
    };
    public getNome(){
        return this.nome;
    };
    public getEmail(){
        return this.email;
    };
    public getDataNasc(){
        return this.dataNasc;
    };
    public getTurmaId(){
        return this.turmaId;
    };
};


export class Docente extends Usuario {
    constructor (
        id: string,
        nome: string,
        email: string,
        dataNasc: string,
        turmaId: string,
        protected especialidades: string[]
    ) {
        super(id, nome, email, dataNasc, turmaId)
    }

    public getEspecialidades(): string[] {
        return this.especialidades;
    }
};


export class Estudante extends Usuario {
    constructor (
        id: string,
        nome: string,
        email: string,
        dataNasc: string,
        turmaId: string,
        protected hobbies: string[]
    ) {
        super(id, nome, email, dataNasc, turmaId)
    }

    public getHobbies(): string[] {
        return this.hobbies;
    }
}