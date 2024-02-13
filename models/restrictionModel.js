import { Model, DataTypes } from "sequelize";

class restriction extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        restrictionid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        restrictionname: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "restriction",
      }
    );

    return this;
  }
}

export default restriction;
