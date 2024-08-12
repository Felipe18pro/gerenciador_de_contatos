let contatos = require('./contatos')

function excluirContato(id) {
    let index = contatos.find(contato => contato.id === id)

    if (index !== -1) {

        contatos[index] = { id, ...contatos }
        contatos.splice(index, 1)
        
    } else {
        console.log('Nenhum contato encontrado')
    }

}

module.exports = excluirContato