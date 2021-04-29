const express = require("express");
const { getData, postData } = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
  // console.log(req,"req")
  const todosList = await getData("todos?user=" + req.query.user);
  res.json({ status: true, data: todosList });
});

router.get("/:id", async (req, res) => {
  //   console.log(req)
  const todosList = await getData("todos/" + req.params.id);
  res.json({ status: true, data: todosList });
});

router.post("/", async (req, res) => {
  const todo = req.body.todo;
  const user = req.body.user;
  if (todo && user) {
    const ntodo = {
      id: new Date().getTime(),
      todo: todo,
      status: false,
      user: user,
    };
    const nresp = await postData("todos", ntodo);
    res.json({ status: true, data: nresp });
  }
  res.json({ status: true, data: [] });
});

router.post("/:id", async (req, res) => {
  // console.log(req.body,"bd")
  const status = req.body.status;
  console.log(status);
  if (req.params.id) {
    const ntodo = {
      status: status,
    };
    console.log(ntodo);
    const nresp = await postData("todos", ntodo, req.params.id);
    res.json({ status: true, data: nresp });
  }
  res.json({ status: true, data: [] });
});

module.exports = router;
