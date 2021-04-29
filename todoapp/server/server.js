
const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require("fs");

const getDataAPI = require('./routes/getdataapi');
const todoRoute = require('./routes/todos');
const userRoute = require('./routes/users');
const PORT = process.env.PORT || '5000';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/getdata', getDataAPI);
app.use('/api/todos', todoRoute);
app.use('/api/users', userRoute);

app.get('*', (req, res) => {
  console.log("R: ", req.url, req.url === '/')
  if (req.url) {
    const name = req.url;
    const pathoffile = 'static' + name;
    if(req.url === '/') {
      console.log("H", fs.existsSync('static/index.html'))
      res.sendFile(path.join(__dirname, 'static/index.html'));
    } else if (fs.existsSync(pathoffile)) {
      console.log("P")
      res.sendFile(path.join(__dirname, pathoffile));
    } else  {
      res.json({})
    }
  }
})

//  Start Server
app.listen(PORT, () => {
  console.log('Server listening at: ' + PORT);
});

