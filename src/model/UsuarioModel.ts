class Estudante {
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

export default Estudante;