(function(exports){
  function testNoteIsInstantiatedWithGivenText() {
    var note = new Note("My first note");
    if (note.text !== "My first note"){
      throw new Error ("Note not stored");
    }
    else { console.log("Passed")}
  };
  testNoteIsInstantiatedWithGivenText();
})(this);
