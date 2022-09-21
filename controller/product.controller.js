const Model = require("../model");
class Product {
  index(req, res) {
    const sql = "SELECT * FROM product";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  findByType(req, res) {
    const sql = "SELECT * FROM product WHERE type_key = ?";
    Model.models.query(sql, [req.params.type], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  findByName(req, res) {
    const sql = "SELECT * FROM product WHERE name = ?";
    Model.models.query(sql, [req.params.name], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Product();
