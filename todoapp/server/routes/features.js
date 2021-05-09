const express = require("express");
const { getData, postData } = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
  // console.log(req,"req")
  const featureList = await getData("features");
  res.json({ status: true, data: featureList });
});

module.exports = router;
