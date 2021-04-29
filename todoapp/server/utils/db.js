const jsonHost = "http://localhost:3000";
const fetch = require('node-fetch')

function postData(table, data, id) {
  return new Promise((resolve) => {
    fetch(`${jsonHost}/${table}` + (id ? `/${id}` : ""), {
      method: id ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      let result = response.json();
      console.log(result);
      resolve(result);
    });
  });
}

function getData(query) {
  return new Promise((resolve) => {
    fetch(`${jsonHost}/${query}`).then((response) => {
      let result = response.json();
      console.log(result);
      resolve(result);
    });
  });
}

module.exports = {
    getData, postData
}
