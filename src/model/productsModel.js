let products = [
    {
        id: 1,
        name: 'As vantagens de ser invisível',
        descricao: 'As Vantagens de Ser Invisível, de Stephen Chbosky, conta a história de Charlie, um adolescente introspectivo que escreve cartas anônimas relatando sua vida. Ele enfrenta as dificuldades do ensino médio, lida com traumas do passado e busca seu lugar no mundo. Ao conhecer Patrick e Sam, descobre a amizade verdadeira, o amor e a importância de se sentir aceito. A obra fala sobre amadurecimento, descobertas e os desafios emocionais da juventude.',
        preco: 30.99,
        categoria: 'Drama',
        estoque: 15,
        ativo: true
    },

    {
        id: 2,
        name: 'Violeta',
        descricao: 'A obra narra a vida de Violeta Del Valle, que nasce em 1920 durante a gripe espanhola e atravessa cem anos de transformações, guerras e amores, revelando sua força diante das perdas e mudanças de um século inteiro.',
        preco: 36.99,
        categoria: 'Romance histórico',
        estoque: 20,
        ativo: true
    },

    {
        id: 3,
        name: 'Mulherzinhas',
        descricao: 'O livro acompanha as irmãs March — Meg, Jo, Beth e Amy — enquanto crescem, enfrentam desafios, descobrem o amor e buscam seus sonhos na América do século XIX.',
        preco: 40.00,
        categoria: 'Romance',
        estoque: 12,
        ativo: true
    },

    {
        id: 4,
        name: 'As irmãs Blue',
        descricao: 'Quatro irmãs, agora três, enfrentam o luto pela perda de Nicky. Avery, Bonnie e Lucky retornam a Nova York para lidar com o passado e a venda do apartamento familiar. À medida que confrontam suas próprias vulnerabilidades, descobrem que os maiores segredos não estão entre elas, mas dentro de si mesmas.',
        preco: 26.99,
        categoria: 'Drama',
        estoque: 16,
        ativo: true
    },

    {
        id: 5,
        name: 'O meu pé de laranja lima',
        descricao: 'A história acompanha Zezé, um garoto pobre e imaginativo, que encontra consolo e amizade em seu pé de laranja lima, enfrentando as dificuldades e tristezas da infância com ternura e coragem.',
        preco: 20.50,
        categoria: 'Infanto-juvenil',
        estoque: 10,
        ativo: true
    }
]

const findAll = () => {
    return products
}

const findById = (id) => {
    return products.find(product => product.id === id)
}