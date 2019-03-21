(function(exports){
  function testThatNoteListViewReturnsTheRightHtmlforAnEmptyNoteList(){
    var noteList = new NoteList();

    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforAnEmptyNoteList();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote(){
    var noteList = new NoteList();
    newnote = new Note("A note")
    noteList.storeNote(newnote);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul><li><div>A note</div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasOneNote();

  function testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasTwoNotes(){
    var noteList = new NoteList();
    newnote1 = new Note("Note1")
    newnote2 = new Note("Note2")
    noteList.storeNote(newnote1)
    noteList.storeNote(newnote2)
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>")
  }
  testThatNoteListViewReturnsTheRightHtmlforANoteListThatHasTwoNotes();

  function testLongNotesShorten(){
    var noteList = new NoteList();
    noteList.storeNote("this is a really really really really long note");
    noteList.storeNote("second note");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul><li><div>this is a really rea...</div></li><li><div>second note</div></li></ul>")
  }
  testLongNotesShorten();

})(this);
