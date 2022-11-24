const express = require('express');

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('minha rota principal');
});

app.get('/home', (requisicao, resposta) => {
    resposta.send('Olá... Esse é o meu primeiro servidor com express');
});

app.get('/array', (requisicao, resposta) => {
    const array = [1,2,3,4,5]
    resposta.send(array);
});

// exercicio resolvido:
//-------------------------------------------------------------------------
app.get('/usuarios', (requisicao, resposta) => {
    const usuarios = [
        {id: 11, nome: 'joao', idade: 23},
        {id: 2, nome: 'maria', idade: 18},
        {id: 4, nome: 'ana', idade: 20},
        {id: 1, nome: 'rodrigo', idade: 17},
        {id: 123, nome: 'rodrigo', idade: 17},
    ]
    resposta.send(usuarios);
});
//-------------------------------------------------------------------------

app.listen(3000);