export const fetchFeatures = async () => {
  const response = await fetch("/api/features");
  const responsejson = await response.json();
  return responsejson.data;
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