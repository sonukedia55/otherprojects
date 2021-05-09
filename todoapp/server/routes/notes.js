const express = require("express");
const { getData, postData } = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
  // console.log(req,"req")
  const notesList = await getData("notes?user=" + req.query.user);
  res.json({ status: true, data: notesList });
});

router.get("/:id", async (req, res) => {
  //   console.log(req)
  const notesList = await getData("notes/" + req.params.id);
  res.json({ status: true, data: notesList });
});

router.post("/", async (req, res) => {
  const note = req.body.note;
  const user = req.body.user;
  if (note && user) {
    const nnote = {
      id: new Date().getTime(),
      note: note,
      user: user,
    };
    const nresp = await postData("notes", nnote);
    res.json({ status: true, data: nresp });
  }
  res.json({ status: true, data: [] });
});

router.post("/:id", async (req, res) => {
  // console.log(req.body,"bd")
  const note = req.body.note;
  console.log(note);
  if (req.params.id) {
    const nnote = {
      note: note,
    };
    console.log(nnote);
    const nresp = await postData("notes", nnote, req.params.id);
    res.json({ status: true, data: nresp });
  }
  res.json({ status: true, data: [] });
});

module.exports = router;
