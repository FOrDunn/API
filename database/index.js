import Sequelize from "sequelize";

import address from "../models/addressModel.js";
import customerAddress from "../models/customerAddressModel.js";
import customer from "../models/customerModel.js";
import foodCategory from "../models/foodCategoryModel.js";
import ingredient from "../models/ingredientModel.js";
import ingredientPurchase from "../models/ingredientPurchaseModel.js";
import purchase from "../models/purchaseModel.js";
import recipeFoodCategory from "../models/recipeFoodCategoryModel.js";
import recipeIngredient from "../models/recipeIngredientModel.js";
import recipe from "../models/recipeModel.js";
import recipePurchase from "../models/recipePurchaseModel.js";
import recipeRestriction from "../models/recipeRestrictionModel.js";
import restriction from "../models/restrictionModel.js";
import supplier from "../models/supplierModel.js";

const models = [
  address,
  customerAddress,
  customer,
  foodCategory,
  ingredient,
  ingredientPurchase,
  purchase,
  recipe,
  recipeFoodCategory,
  recipeIngredient,
  recipePurchase,
  recipeRestriction,
  restriction,
  supplier,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(
      "krautundruebenDB",
      "cruzjuanblandi",
      "DWT4yR5LfJUC",
      {
        host: "ep-floral-wildflower-a2r2ghwu.eu-central-1.aws.neon.tech",
        port: "5432",
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    );
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
