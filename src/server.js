import express from "express";
import { tarefas, getNextId } from "./dados.js";

const app = express();
const PORTA = 3000;

app.use(express.json());

// GET /tarefas - lista todas as tarefas
app.get("/tarefas", (req, res) => {
  res.status(200).json(tarefas);
});

// POST /tarefas - cria uma nova tarefa
app.post("/tarefas", (req, res) => {
  const { titulo, concluida = false } = req.body;

  if (!titulo || titulo.toString().trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório." });
  }

  const novaTarefa = {
    id: getNextId(),
    titulo: titulo.toString(),
    concluida: Boolean(concluida),
  };

  tarefas.push(novaTarefa);
  return res.status(201).json(novaTarefa);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
