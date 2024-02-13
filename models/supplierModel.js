import { Model, DataTypes } from "sequelize";

class supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        suppliernr: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        addressid: {
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        },
        housenr: { type: DataTypes.STRING },
        street: { type: DataTypes.STRING },
        phone: { type: DataTypes.INTEGER },
        email: { type: DataTypes.STRING },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "supplier",
      }
    );

    return this;
  }
}

export default supplier;
