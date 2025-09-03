let clients = [
    {
        id: 1,
        nome: 'Julia Oliveira',
        email: 'juliaoliveira@gmail.com',
        telefone: '(11)95369-2245',
        endereço: 'Rua Engenheiro Francisco Bicalho 83, Parque São Lucas, São Paulo - SP 03239-120',
        dataCadastro: '2025-05-08 - 14h03min',
        ativo: true
    },

    {
        id: 2,
        nome: "Carlos Mendes",
        email: "carlos.mendes@gmail.com",
        telefone: "(21)98765-4321",
        endereço: "Av. das Américas 1200, Barra da Tijuca, Rio de Janeiro - RJ 22793-082",
        dataCadastro: "2025-06-12 - 16h30min",
        ativo: true
    },

    {
        id: 3,
        nome: "Ana Paula Silva",
        email: "anapaula.silva@yahoo.com",
        telefone: "(31)91234-5678",
        endereço: "Rua das Flores 456, Centro, Belo Horizonte - MG 30295-145",
        dataCadastro: "2025-04-20 - 10h23min",
        ativo: true
    },

    {
        id: 4,
        nome: "Rafael Costa",
        email: "rafael.costa@hotmail.com",
        telefone: "(41)99876-5432",
        endereço: "Rua XV de Novembro 789, Batel, Curitiba - PR 80420-090",
        dataCadastro: "2025-03-15 - 11h20min",
        ativo: false
    },

    {
        id: 5,
        nome: "Beatriz Fernandes",
        email: "beatriz.fernandes@gmail.com",
        telefone: "(51)93456-7890",
        endereço: "Av. Borges de Medeiros 321, Centro, Porto Alegre - RS 90020-022",
        dataCadastro: "2025-07-01 - 17h59min",
        ativo: true
    }
]

const findAll = () => {
    return clients
}

const findById = (id) => {
    return clients.find(client => client.id === id)
}

const createClient = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1
    const useWithId = { id: newId, ...newClient }
    clients.push(useWithId)
    return useWithId
}

module.exports = {
    findAll,
    findById,
    createClient
}
