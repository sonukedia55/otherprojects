const express = require("express");
const { getData, postData } = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
  const todosList = await getData("todos");
  res.json({ status: true, data: todosList });
});

router.get("/:id", async (req, res) => {
  //   console.log(req)
  const todosList = await getData("todos/" + req.params.id);
  res.json({ status: true, data: todosList });
});

router.post("/", async (req, res) => {
  if (req.body.action) {
    const userList = await postData("users", {
      id: new Date().getTime(),
      username: req.body.uname,
      password: req.body.upass,
    });
    res.json({ status: true, data: userList });
  } else {
    const reqq = `username=${req.body.uname}&password=${req.body.upass}`;
    const userList = await getData("users?" + reqq);
    res.json({ status: true, data: userList });
  }
});

module.exports = router;
