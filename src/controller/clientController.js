const clientModel = require('../model/clientModel')

const createClient = (req, res) => {
    const {nome, email, telefone, endereco, dataCadastro, ativo} = req.body

    if(!nome || !email || !telefone || !endereco || !dataCadastro || !ativo) {
        res.status(400).json({mensagem: 'Erro no registro de cliente!'})
    }else{
        const newClient = clientModel.createClient({nome,email,telefone,endereco,dataCadastro,ativo})
        res.status(201).json(newClient)
    }
}

const getClientById = (req, res) =>{
    const id = parseInt(req.params.id)
    const client = clientModel.findById(id)

    if(client){
        res.status(200).json(client)
    }else{
        res.status(404).json({mensagem: 'Cliente não encontrado!'})
    }
}

const getAllClients = (req, res) => {
    const clients = clientModel.findAll()
    res.status(200).json(clients)
}

const updateClient = (req, res) => {
    const id = parseInt(req.params.id)

    const updateClient = clientModel.updateById(id, req.body)

    if(updateClient){
        res.status(200).json(updateClient)
    }else{
        res.status(404).json({mensagem:'Não foi possível localizar o cliente para atualizá-lo!'})
    }
}

const deleteClient = (req, res) => {
    const id = parseInt(req.params.id)

    const deletedClient = clientModel.deleteById(id)

    if(deletedClient){
        res.status(200).json({mensagem:'Cliente deletado com sucesso!'})
    }else{
        res.status(404).json({mensagem:'Houve um erro ao deletar esse cliente'})
    }
}

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}