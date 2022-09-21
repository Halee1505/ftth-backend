const Model = require("../model");
class Endow {
  index(req, res) {
    const sql = "SELECT * FROM endow";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  addRate(req, res) {
    const sql =
      "INSERT INTO endow (product_name, device, discount, 6_month_bonus, 12_month_bonus, 18_month_bonus) VALUES (?, ?, ?, ?, ?, ?)";
    Model.models.query(
      sql,
      [
        req.body.product_name,
        req.body.device,
        req.body.discount,
        req.body._6_month_bonus,
        req.body._12_month_bonus,
        req.body._18_month_bonus,
      ],
      (err, result) => {
        if (err) {
          throw err;
        }
        res.send(result);
      }
    );
  }
  findByName(req, res) {
    const sql = "SELECT * FROM endow WHERE product_name = ?";
    Model.models.query(sql, [req.params.name], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Endow();
