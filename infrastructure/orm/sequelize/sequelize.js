'use strict'

import { Sequelize } from 'sequelize'
import { database } from '../../config/environment.js'

const sequelize = new Sequelize(database.url)

sequelize.import('./models/Client')
sequelize.import('./models/Wishlist')

export default sequelize
