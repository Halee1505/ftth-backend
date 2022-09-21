const Model = require("../model");
class Rates {
  index(req, res) {
    const sql = "SELECT * FROM rates";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  addRate(req, res) {
    const sql =
      "INSERT INTO rates (product_name, 1_month, 6_month, 12_month, 18_month, inner_price, inner_discount_price, inner_bandwidth, inner_mib, inner_static_ip,outside_price, outside_discount_price, outside_bandwidth, outside_mib, outside_static_ip) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?)";
    Model.models.query(
      sql,
      [
        req.body.product_name,
        req.body._1_month,
        req.body._6_month,
        req.body._12_month,
        req.body._18_month,
        req.body.inner_price,
        req.body.inner_discount_price,
        req.body.inner_bandwidth,
        req.body.inner_mib,
        req.body.inner_static_ip,
        req.body.outside_price,
        req.body.outside_discount_price,
        req.body.outside_bandwidth,
        req.body.outside_mib,
        req.body.outside_static_ip,
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
    const sql = "SELECT * FROM rates WHERE product_name = ?";
    Model.models.query(sql, [req.params.name], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Rates();
