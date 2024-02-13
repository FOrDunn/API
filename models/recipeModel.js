import { Model, DataTypes } from "sequelize";

class recipe extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        recipeid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        kcal: {
          type: DataTypes.INTEGER,
        },
        foodcategory: { type: DataTypes.BOOLEAN },
        foodrestriction: { type: DataTypes.BOOLEAN },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "recipe",
      }
    );

    return this;
  }
}

export default recipe;
