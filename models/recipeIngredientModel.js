import { Model, DataTypes } from "sequelize";

class recipeIngredient extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        recipeid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        ingredientid: {
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
        tableName: "recipeIngredient",
      }
    );

    return this;
  }
}

export default recipeIngredient;
