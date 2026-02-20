export const tarefas = [
  { id: 1, titulo: "Estudar Node", concluida: false },
  { id: 2, titulo: "Fazer telas no Figma", concluida: true }
];

export function getNextId() {
  if (tarefas.length === 0) return 1;
  return Math.max(...tarefas.map((t) => t.id)) + 1;
}
