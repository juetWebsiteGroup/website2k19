const announcementsData = require("../JSON/UInfo/announcements.json");
const academicNewsData = require("../JSON/UInfo/academicNews.json");
const awardsAchievementsData = require("../JSON/UInfo/awards&achievements.json");

const express = require("express");
const router = express.Router();

router.get("/announcements", (req, res) => {
  res.json(announcementsData);
});

router.get("/academicNews", (req, res) => {
  res.json(academicNewsData);
});

router.get("/awards", (req, res) => {
  res.json(awardsAchievementsData);
});

module.exports = router;
