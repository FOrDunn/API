import { Model, DataTypes } from "sequelize";

class ingredientPurchase extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        ingredientid: {
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
        tableName: "ingredientPurchase",
      }
    );

    return this;
  }
}

export default ingredientPurchase;
