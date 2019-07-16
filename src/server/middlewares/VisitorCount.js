const express = require("express");
const router = express.Router();
require("dotenv").config();
const con = require("../connection");
con.getConnection(err => {
  if (err) {
    console.log(err.message);
  }
});
router.get("/", (req, res) => {
  var admissionCounter = 0;
  con.execute("SELECT `AdmissionCounter` from `counter`", (err, rows) => {
    if (err) {
      throw err;
    }
    admissionCounter = rows[0].AdmissionCounter;
    con.execute("UPDATE `counter` SET `AdmissionCounter`='?'", [admissionCounter + 1], (err, rows) => {
      if (err) {
        res.sendStatus(500);
        throw err;
      }
      //res.send(rows);
      con.execute("SELECT `AdmissionCounter` from `counter`", (err, rows) => {
        if (err) throw err;
        console.log(rows);
        res.json(rows);
        res.end();
      });
    });
  });
});

// router.use("/Visitors", );

module.exports = router;
