let contatos = require('./contatos')

function alterarContato(id, novoContato){


    let emailjaExiste = contatos.find(contato => contato.email === novoContato.email && contato.id != id)

    if(emailjaExiste){
        console.log('')
        console.log('Já existe um contato com esse email');
    }else {
        let index = contatos.find(contato => contato.id === id)
        contatos[index] = {id, ...novoContato};
        console.log('')
        console.log('contato editado com sucesso!')
    }
}

module.exports =  alterarContato