import sequelize from '../orm/sequelize/sequelize.js'

export default class {
  constructor () {
    this.db = sequelize
    this.model = this.db.model('Client')
  }

  async findByPk (id) {
    return this.model.findByPk(id)
  }
}
