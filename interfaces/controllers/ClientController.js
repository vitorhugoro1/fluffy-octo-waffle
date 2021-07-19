export default class ClientController {
  async listClients (request, response) {
    return response.json([
      {
        id: 123,
        name: 'Vitor',
        email: 'vitor@example.com'
      }
    ])
  }

  async deleteClient (request, response) {
    return response.json({
      message: 'Client deleted.'
    })
  }

  async findClient (request, response) {
    console.log(request.params)

    return response.json({
      id: 123,
      name: '',
      email: ''
    })
  }

  async createClient (request, response) {
    return response.json({
      id: 321,
      name: request.params.name,
      email: request.params.email
    })
  }

  async updateClient (request, response) {}
}
