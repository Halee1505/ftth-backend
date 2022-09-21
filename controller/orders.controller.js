const Model = require("../model");
class Orders {
  index(req, res) {
    const sql = "SELECT * FROM orders";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  findByUser(req, res) {
    const sql = "SELECT * FROM orders WHERE customer_phone = ?";
    Model.models.query(sql, [req.params.id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  findById(req, res) {
    const sql = "SELECT * FROM orders WHERE id = ?";
    Model.models.query(sql, [req.params.id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  create(req, res) {
    const sql =
      "INSERT INTO orders (product_name,customer_name, customer_phone, customer_email, customer_city, customer_district, customer_ward, customer_address, customer_note) VALUES (?, ?,  ?, ?, ?, ?, ?, ?, ?)";
    Model.models.query(
      sql,
      [
        req.body.product_name,
        req.body.customer_name,
        req.body.customer_phone,
        req.body.customer_email,
        req.body.customer_city,
        req.body.customer_district,
        req.body.customer_ward,
        req.body.customer_address,
        req.body.customer_note,
      ],
      (err, result) => {
        if (err) {
          throw err;
        }
        res.send(result);
      }
    );
  }
  changeStatus(req, res) {
    const sql = "UPDATE orders SET status = ? WHERE id = ?";
    Model.models.query(sql, [req.body.status, req.body.id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  deleteOrder(req, res) {
    const sql = "DELETE FROM orders WHERE id = ?";
    Model.models.query(sql, [req.params.id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Orders();
