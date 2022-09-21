const Model = require("../model");
class User {
  index(req, res) {
    const sql = "SELECT * FROM user";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  getCurrentUser(req, res) {
    const sql = "SELECT * FROM user WHERE id = ?";
    Model.models.query(sql, [req.params.id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }

  create(req, res) {
    const sql1 = "SELECT * FROM user WHERE phone = ?";
    Model.models.query(sql1, [req.body.phone], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.length > 0) {
        res.send("Curr use");
      } else {
        const sql = "INSERT INTO user (phone, password) VALUES (?, ?)";
        Model.models.query(
          sql,
          [req.body.phone, req.body.password],
          (err, result) => {
            if (err) {
              throw err;
            }
            res.send(result);
          }
        );
      }
    });
  }
  delete(req, res) {
    const sql = "DELETE FROM user WHERE id = ?";
    Model.models.query(sql, [Number(req.params.id)], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  checkLogin(req, res) {
    const sql = "SELECT * FROM user WHERE phone = ? AND password = ?";
    Model.models.query(
      sql,
      [req.body.phone, req.body.password],
      (err, result) => {
        if (err) {
          throw err;
        }
        res.send(result);
      }
    );
  }
}

module.exports = new User();
