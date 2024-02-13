import { Model, DataTypes } from "sequelize";
import address from "./addressModel.js";

class customerAddress extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        addressid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        customernr: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        housenr: { type: DataTypes.STRING },
        street: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "customerAddress",
      }
    );

    return this;
  }
}

export default customerAddress;
