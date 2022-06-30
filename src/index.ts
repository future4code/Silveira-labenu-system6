import { app } from "./app";
import getAllDocentes from "./endpoints/getAllDocentes";
import getEstudante from "./endpoints/getEstudante";
import getTurmas from "./endpoints/getTurmas";
import postDocente from "./endpoints/postDocente";
import postEstudante from "./endpoints/postEstudante";
import postTurma from "./endpoints/postTurma";
import putDocente from "./endpoints/putDocente";
import putEstudante from "./endpoints/putEstudante";
import putTurmaModulo from "./endpoints/putTurmaModulo";

app.post("/turma", postTurma);
app.get("/turma", getTurmas);
app.put("/turma", putTurmaModulo);

app.post("/estudante", postEstudante);
app.get("/estudante/:nome", getEstudante);
app.put("/estudante", putEstudante);

app.post("/docente", postDocente);
app.get("/docente", getAllDocentes);
app.put("/docente", putDocente);