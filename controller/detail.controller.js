const Model = require("../model");
class Detail {
  index(req, res) {
    const sql = "SELECT * FROM detail";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  findByName(req, res) {
    const sql = "SELECT * FROM detail WHERE product_name = ?";
    Model.models.query(sql, [req.params.name], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Detail();
