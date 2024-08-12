const alterarContato  = require('./editar');
const inserirContatos = require('./inserir');
const excluirContato  = require('./excluir')
const listarContatos  = require('./listar')
var contatos = require('./contatos')


const prompt = require('prompt-sync')();


function exibirMenu() {
    console.log(`
    Menu:
        1. Inserir contato
        2. Alterar contado
        3. Excluir contato
        4. Listar contato
        5. Sair
    `);

    let opcao 
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        
        case '1'://inserir

            let nome = prompt("Digite o nome do contato: ")

            let telefones = []      
            let telefone
            while ((telefone = prompt ('Telefone(ou deixe em branco para sair)'))){
                telefones.push(telefone)
            }
            let email = prompt('Qual o email do contato: ')
            

            inserirContatos({nome,telefones,email})
            exibirMenu()
            break;

        case '2'://alterar
            listarContatos()

            const id = parseInt(prompt('qual o id do usuario que voce deseja editar: '))
                let novonome = (prompt('Qual o novo nome: ')).toLowerCase()
                let novostelefones = []
                let novotelefone
                let novoEmail = prompt('Qual o novo email do usuario: ')

                while((novotelefone = prompt('Qual o novo telefone (ou deixe branco para sair): '))){
                    novostelefones.push(novotelefone) 
                }
                alterarContato(id, {nome: novonome, telefones: novostelefones, email: novoEmail}) 


            
            exibirMenu() 

            break     

        case '3'://excluir
            listarContatos()

            let indexRemover = parseInt(prompt('Qual o numero do contato que voce deseja excluir: '))

            if(indexRemover <= contatos.length){
            let confirmacao = prompt('Voce tem certeza? (S / N): ').toUpperCase()
            if(confirmacao == 'S'){               
                excluirContato(indexRemover)
                console.log('Usuario removido com sucesso')

            }else if(confirmacao == 'N'){
                console.log('TA BÃO ENTÃO NENHUM CONTATO EXCLUIDO!')
            }else {
                console.log('OPCAO INVALIDA!')
                
            }
            }else {
                console.log(`Não existe um usuário ${indexRemover}!`)
            }

            exibirMenu()

            break

        case '4'://listar
            listarContatos()
            exibirMenu()

            break

        case '5':
            console.log('Saindo dos contatos...')
            return

        default:
            console.log('Opção invalida...')
            exibirMenu()
            break;
    }
}
exibirMenu()