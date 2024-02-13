import customer from "../models/customerModel.js";
import customerAddress from "../models/customerAddressModel.js";

class CustomerController {
  async index(req, res) {
    try {
      const customerData = await customer.findAll({});
      return res.status(200).json(customerData);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to get all customers records!", error });
    }
  }
  async getCustomer(req, res) {
    try {
      const { customerid } = req.params;
      const customerData = await customer.findByPk(customerid);
      return res.status(200).json(customerData);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to get customers record!", error });
    }
  }
}

export default new CustomerController();
