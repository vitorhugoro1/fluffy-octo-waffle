'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.createTable(
        'wishlists',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            primaryKey: true
          },
          client_id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            unique: true
          }
        },
        { transaction }
      )

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()

      throw err
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.dropTable('wishlists', { transaction })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()

      throw err
    }
  }
}
