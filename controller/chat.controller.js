const Model = require("../model");
class Chat {
  index(req, res) {
    const sql = "SELECT * FROM chat";
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  findByUser(req, res) {
    const sql = "SELECT * FROM chat WHERE user = ?";
    Model.models.query(sql, [req.params.id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
  addMessage(req, res) {
    const sql = "INSERT INTO chat (user, type, message) VALUES (?, ?, ?)";
    Model.models.query(
      sql,
      [req.body.user, req.body.type, req.body.message],
      (err, result) => {
        if (err) {
          throw err;
        }
        res.send(result);
      }
    );
  }

  //get list of sender  and receiver and whom message
  getUserList(req, res) {
    const sql =
      "SELECT * ,ROW_NUMBER() OVER (PARTITION BY user ORDER BY id DESC ) FROM chat AS rn UNION SELECT * FROM chat WHERE rn=1";
    console.log(sql);
    Model.models.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  }
}

module.exports = new Chat();
