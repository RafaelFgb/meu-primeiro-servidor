const professores = require('./bancoDeDados')

const filtrarProfessores = (req, res) => {
    console.log('cheguei na listagem');
    const { stack } = req.query;
    let resultado = professores;

    console.log('cheguei no controlador');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    }

    res.send(resultado);
}

const encontrarProfessor = (req, res) => {
    console.log('rota para encontrar professor');
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    });

    res.send(professorEncontrado)
}

module.exports = {
    filtrarProfessores,
    encontrarProfessor
}