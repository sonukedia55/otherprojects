
const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require("fs");

const getDataAPI = require('./routes/getdataapi');
const todoRoute = require('./routes/todos');
const noteRoute = require('./routes/notes');
const userRoute = require('./routes/users');
const featureRoute = require('./routes/features');
const PORT = process.env.PORT || '5000';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/getdata', getDataAPI);
app.use('/api/todos', todoRoute);
app.use('/api/notes', noteRoute);
app.use('/api/users', userRoute);
app.use('/api/features', featureRoute);

app.get('*', (req, res) => {
  console.log("R: ", req.url, req.url === '/')
  if (req.url) {
    const name = req.url;
    const pathoffile = 'static' + name;
    console.log(name)
    if(req.url === '/' || req.url === '/todos' || req.url === '/notes') {
      console.log("H", fs.existsSync('static/index.html'))
      res.sendFile(path.join(__dirname, 'static/index.html'));
    } else if (fs.existsSync(pathoffile)) {
      console.log("P")
      res.sendFile(path.join(__dirname, pathoffile));
    } else  {
      res.json({'message':'Page not found!'})
    }
  }
})

//  Start Server
app.listen(PORT, () => {
  console.log('Server listening at: ' + PORT);
});

