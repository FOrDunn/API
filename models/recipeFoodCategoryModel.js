import { Model, DataTypes } from "sequelize";

class recipeFoodCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        foodcategoryid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        recipeid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "recipeFoodCategory",
      }
    );

    return this;
  }
}

export default recipeFoodCategory;
