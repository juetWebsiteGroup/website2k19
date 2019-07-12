const express = require("express");
const router = express.Router();
require("dotenv").config();
const con = require("../connection");
con.connect(err => {
  if (err) {
    console.log(err.message);
  }
});
router.get("/", (req, res) => {
  var admissionCounter = 0;
  con.query(`SELECT AdmissionCounter from counter`, (err, rows) => {
    if (err) {
      throw err;
    }
    admissionCounter = rows[0].AdmissionCounter;
    con.query(`UPDATE counter SET AdmissionCounter='${admissionCounter + 1}'`, (err, rows) => {
      if (err) {
        res.sendStatus(500);
        throw err;
      }
      //res.send(rows);
      con.query(`SELECT AdmissionCounter from counter`, (err, rows) => {
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
