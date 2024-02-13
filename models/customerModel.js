import { Model, DataTypes } from "sequelize";

class customer extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        customernr: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        familyname: {
          type: DataTypes.STRING,
        },
        birthday: {
          type: DataTypes.DATE,
        },
        phone: {
          type: DataTypes.INTEGER,
        },
        email: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "customer",
      }
    );

    return this;
  }
}

export default customer;
