

(function(exports){
  function testNoteIsInstantiatedWithGivenTextAssert() {
    var note = new Note("My first note");
    assert.isTrue(note.text === "My first note")
  };
  testNoteIsInstantiatedWithGivenTextAssert();
})(this);
