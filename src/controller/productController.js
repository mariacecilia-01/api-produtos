const productModel = require('../model/productsModel')

const createProduct = (req, res) => {
    const {nome, descricao, preco, categoria, estoque, ativo} = req.body

    if(!nome || !descricao || !preco || !categoria || !estoque || !ativo) {
        res.status(400).json({mensagem: 'Erro na criação do produto!'})
    }else{
        const newProduct = productModel.createProduct({nome, descricao, preco, categoria, estoque, ativo})
        res.status(201).json(newProduct)
    }
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id)
    const product = productModel.findById(id)

    if(product){
        res.status(200).json(product)
    }else{
        res.status(400).json({mensagem: 'Produto não encontrado!'})
    }
}

const getAllProducts = (req, res) => {
    const products = productModel.findAll()
    res.status(200).json(products)
}

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id)

    const updateProduct = productModel.updateById(id, req.body)

    if(updateProduct){
        res.status(200).json(updateProduct)
    }else{
        res.status(404).json({mensagem:'Não foi possível localizar o produto para atualizá-lo!'})
    }
}

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id)

    const deleteProduct = productModel.deleteById(id)

    if(deleteProduct){
        res.status(200).json({mensagem: 'Produto removido do sistema com sucesso!'})
    }else{
        res.status(404).json({mensagem: 'Houve um erro ao deletar esse produto.'})
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}