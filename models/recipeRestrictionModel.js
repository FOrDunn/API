import { Model, DataTypes } from "sequelize";

class recipeRestriction extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        restrictionid: {
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
        tableName: "recipeRestriction",
      }
    );

    return this;
  }
}

export default recipeRestriction;
