export const fetchNotes = async (user) => {
  const response = await fetch("/api/notes?user="+user);
  const responsejson = await response.json();
  return responsejson.data;
};

export const saveNotes = async (val) => {
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  };
  console.log(opt)
  const response = await fetch("/api/notes",opt);
  const responsejson = await response.json();
  return responsejson;
};

export const updateNote = async (id,note) => {
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({note:note}),
  };
  console.log(opt)
  const response = await fetch("/api/notes/"+id,opt);
  const responsejson = await response.json();
  return responsejson;
};

