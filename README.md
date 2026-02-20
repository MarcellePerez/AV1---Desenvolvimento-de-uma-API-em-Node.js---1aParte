# AV1 - API Node + Express (Parte 1)

Projeto mínimo para a AV1: API em Node.js com Express e dados em memória.

## Como usar

1. Abra um terminal na pasta do projeto:

```powershell
cd c:\Users\aluno01.ec\Documents\Av1-MarcellePerez
```

2. Instale dependências:

```powershell
npm install
```

3. Rode o servidor:

```powershell
npm run dev
```

4. Endpoints disponíveis:

- GET /tarefas  -> lista todas as tarefas (status 200)
- POST /tarefas -> cria nova tarefa (status 201) com JSON no body: { "titulo": "...", "concluida": false }

## Exemplo de uso (PowerShell)

```powershell
# listar tarefas
Invoke-RestMethod -Uri http://localhost:3000/tarefas -Method GET | ConvertTo-Json -Depth 3

# criar tarefa
Invoke-RestMethod -Uri http://localhost:3000/tarefas -Method POST -Body (ConvertTo-Json @{ titulo = "Nova tarefa"; concluida = $false }) -ContentType 'application/json'
```

## Notas

- `package.json` define `type: "module"` para usar import/export.
- O projeto usa um array em memória em `src/dados.js`; sem banco de dados.
- Para a entrega, suba este diretório a um repositório público no GitHub e envie o link.
