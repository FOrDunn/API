import { Model, DataTypes } from "sequelize";

class recipePurchase extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        recipeid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        purchasenr: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "recipePurchase",
      }
    );

    return this;
  }
}

export default recipePurchase;
