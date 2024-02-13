import { Model, DataTypes } from "sequelize";

class ingredient extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        ingredientid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        netprice: {
          type: DataTypes.DECIMAL,
        },
        fat: {
          type: DataTypes.STRING,
        },
        kcal: {
          type: DataTypes.INTEGER,
        },
        carbohydrates: { type: DataTypes.STRING },
        unit: { type: DataTypes.STRING },
        stock: { type: DataTypes.INTEGER },
        description: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        protein: { type: DataTypes.STRING },
        supplierNr: { type: DataTypes.INTEGER },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "ingredient",
      }
    );

    return this;
  }
}

export default ingredient;
