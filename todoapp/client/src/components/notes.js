import React, { useEffect, useRef, useState } from "react";
import { fetchNotes, saveNotes, updateNote } from "../modal/notes";
import styles from "./all.scss";

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState(0);
  const inputNoteRef = useRef(null);
  const usr = props.user ? props.user.id : 0;

  const eachNote = (itm) => {
    return (
      <div
        key={itm.id}
        data-id={itm.id}
        onClick={loadNoteFromList.bind(itm.id)}
        className={styles["noteelement"]}
      >
        <a>{itm.note}</a>
      </div>
    );
  };

  function loadNoteFromList(e) {
    // console.log(e.target.getAttribute("data-id"))
    // console.log(e.currentTarget.getAttribute("data-id"))
    let idtm =
      e.currentTarget.getAttribute("data-id") ||
      e.target.getAttribute("data-id");
    setNoteId(idtm);
    let allnote = notes.filter((f) => {
      return f.id == idtm;
    });
    inputNoteRef.current.value = allnote[0].note;
    // inputNoteRef
  }

  function addNote() {
    if (noteId) {
      updateNote(noteId, inputNoteRef.current.value).then((up) => {
        console.log(up);
        inputNoteRef.current.value = "";
        fetchNotes(usr).then((val) => {
          console.log(val);
          setNotes(val);
        });
      });
    } else {
      saveNotes({
        note: inputNoteRef.current.value,
        user: props.user.id,
      }).then((resp) => {
        console.log(resp);
        inputNoteRef.current.value = "";
        fetchNotes(usr).then((val) => {
          console.log(val);
          setNotes(val);
        });
      });
    }
    console.log(inputNoteRef.current.value, "ival");
  }

  function loadNoteList() {
    return (
      <div className={styles["noteGroup"]}>
        <div className={styles["noteList"]}>{notes.map(eachNote)}</div>
        <div className={styles["noteelement"]}>
          <textarea
            type="text"
            placeholder="Enter Note"
            ref={inputNoteRef}
          ></textarea>
          <button onClick={addNote}>{noteId ? "Update" : "Add"}</button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchNotes(usr).then((val) => {
      console.log(val);
      setNotes(val);
    });
  }, []);

  return (
    <div className={styles["page"]}>
      <div className={styles["notesection"]}>
        <h2>Note App</h2>
        {loadNoteList()}
      </div>
    </div>
  );
}

export default Notes;
