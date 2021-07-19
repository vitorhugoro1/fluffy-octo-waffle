export default class WishListController {
  async listWishLists () {
    return [
      {
        id: 123,
        name: 'Vitor',
        email: 'vitor@example.com'
      }
    ]
  }

  async deleteWishList () {}

  async findWishList () {
    return {
      id: 123,
      name: '',
      email: ''
    }
  }

  async createWishList (body) {
    return {
      id: 321,
      name: body.name,
      email: body.email
    }
  }

  async updateWishList () {}
}
