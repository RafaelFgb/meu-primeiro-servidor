const express = require('express');
const {filtrarProfessores, 
       encontrarProfessor
} = require('./controladores/professores');

const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediario');
    next();
}

const segundoIntermediario = (req, res, next) => {
    console.log('passei no segundo intermediario');
    next();
}

const intermediario = (req, res, next) => {
    console.log('passei no intermediario');
    next();
}

// app.use(primeiroIntermediario);

// app.use(segundoIntermediario);

//rotas abaixo -> 
// localhost:3000/professores
app.get('/professores', intermediario, filtrarProfessores);

// localhost:3000/professores/2
app.get('/professores/:id', encontrarProfessor);


app.listen(3000, () => {
    console.log(`escutando a rota 3000`);
});