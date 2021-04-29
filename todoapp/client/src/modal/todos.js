export const fetchTodos = async (user) => {
  const response = await fetch("/api/todos?user="+user);
  const responsejson = await response.json();
  return responsejson.data;
};

export const saveTodos = async (val) => {
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  };
  console.log(opt)
  const response = await fetch("/api/todos",opt);
  const responsejson = await response.json();
  return responsejson;
};

export const updateTodo = async (id,status) => {
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({status:status}),
  };
  console.log(opt)
  const response = await fetch("/api/todos/"+id,opt);
  const responsejson = await response.json();
  return responsejson;
};

export const userLogin = async (uname, upass) => {
  console.log(uname)
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uname:uname,
      upass:upass,
    }),
  };
  console.log(opt)
  const response = await fetch("/api/users",opt);
  const responsejson = await response.json();
  return responsejson;
};

export const userRegister = async (uname, upass) => {
  console.log(uname)
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uname:uname,
      upass:upass,
      action:'register'
    }),
  };
  console.log(opt)
  const response = await fetch("/api/users",opt);
  const responsejson = await response.json();
  return responsejson;
};

export const loggedUser = (val) => {
  if(val){
    localStorage.setItem("userlogged",val)
  }else{
    return localStorage.getItem("userlogged");
  }
  return
};

export const logOutUser = () => {
  localStorage.removeItem("userlogged")
}