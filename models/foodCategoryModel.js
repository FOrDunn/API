import { Model, DataTypes } from "sequelize";

class foodCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        foodcategoryid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        foodcategoryname: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "foodCategory",
      }
    );

    return this;
  }
}

export default foodCategory;
