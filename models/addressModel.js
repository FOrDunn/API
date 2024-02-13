import { Model, DataTypes } from "sequelize";

class address extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        addressid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        postcode: {
          type: DataTypes.INTEGER,
        },
        city: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "address",
      }
    );

    return this;
  }
}

export default address;
