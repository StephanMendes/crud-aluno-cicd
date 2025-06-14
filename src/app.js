const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let alunos = [];
let idAtual = 1;

app.get('/', (req, res) => {
    res.send('Bem Vindo ao cadastro de alunos!');
});

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.post('/alunos', (req, res) => {
    const { nome, curso, semestre, cpf } = req.body;
    const novoAluno = { id: idAtual++, nome, curso, semestre, cpf };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const index = alunos.findIndex(a => a.id == id);
    if (index === -1) return res.status(404).json({ error: 'Aluno não encontrado' });

    const { nome, curso, semestre, cpf } = req.body;
    alunos[index] = { id: Number(id), nome, curso, semestre, cpf };
    res.json(alunos[index]);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    alunos = alunos.filter(a => a.id != id);
    res.status(204).send();
});

function getWelcomeMessage() {
    return 'Bem vindo ao pipeline!';
}

module.exports = { app, getWelcomeMessage, port };

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}
