const Model = require("../model");
class Action {
  getProductType(req, res) {
    const sql =
      "SELECT * FROM product JOIN detail ON product.name = detail.product_name WHERE product.type_key = ?";
    Model.models.query(sql, [req.params.name], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Action();
