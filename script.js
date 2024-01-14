const note = document.querySelector(".note");
const addNotes = document.querySelector(".addNotes");

addNotes.addEventListener("click", () => {
  const newNoteElement = newNote();
  editNotes(newNoteElement);
  deleteNotes(newNoteElement);
});

function newNote() {
  const newNote = document.createElement("div");
  newNote.classList.add("notes");
  newNote.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <div class="main"></div>
    <textarea name="" id="textarea" cols="20" rows="1"></textarea>
  `;

  note.appendChild(newNote);
  return newNote;
}

function editNotes(newNote) {
  const edit = newNote.querySelector(".edit");
  const main = newNote.querySelector(".main");
  const textArea = newNote.querySelector("#textarea");

  edit.addEventListener("click", () => {
    textArea.classList.toggle("hidden");
    main.classList.toggle("active");
  });

  textArea.addEventListener("input", (e) => {
    var content = e.target.value;
    main.innerHTML = `<h3>${content}</h3>`;
  });
}

function deleteNotes(newNote) {
  const deleteBtn = newNote.querySelector(".delete");

  deleteBtn.addEventListener("click", () => {
    newNote.remove();
  });
}
