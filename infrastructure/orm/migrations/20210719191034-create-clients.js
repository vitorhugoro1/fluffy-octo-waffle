'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.createTable(
        'clients',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          }
        },
        { transaction }
      )

      await queryInterface.addIndex('clients', ['email'], {
        fields: 'email',
        unique: true,
        transaction
      })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()

      throw err
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.dropTable('clients', { transaction })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()

      throw err
    }
  }
}
