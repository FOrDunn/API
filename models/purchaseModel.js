import { Model, DataTypes } from "sequelize";

class purchase extends Model {
  static init(sequelize) {
    super.init(
      {
        // Model attributes are defined here
        purchasenr: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        customernr: {
          type: DataTypes.INTEGER,
        },
        date: {
          type: DataTypes.DATE,
        },
        totalprice: {
          type: DataTypes.DECIMAL,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "purchase",
      }
    );

    return this;
  }
}

export default purchase;
