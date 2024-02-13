import { Router } from "express";
import customerController from "../controllers/customerController.js";

const routes = new Router();

routes.get("/customer", customerController.index);

routes.get("/customer/:customerid", customerController.getCustomer);

export default routes;
