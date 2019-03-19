(function(exports){
  function testNoteIsInstantiatedWithAnEmptyArrayOfNotes() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getNotes()));
    assert.isTrue(noteList.getNotes().length === 0);
  };
  testNoteIsInstantiatedWithAnEmptyArrayOfNotes();
})(this);
