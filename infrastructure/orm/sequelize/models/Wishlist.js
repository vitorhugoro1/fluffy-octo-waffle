import { DataTypes } from 'sequelize'

export default function (sequelize) {
  sequelize.define('wishlists', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false
    }
  })
}
