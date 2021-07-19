'use strict'

import { Sequelize } from 'sequelize'

const models = [import('./models/Client.js'), import('./models/Wishlist.js')]

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: null,
  database: 'fluffy'
})

models.forEach(model => {})

export default sequelize
