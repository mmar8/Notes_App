(function(exports){
  var notes;
  function NoteList(){
    notes = [];
  };
  NoteList.prototype.getNotes = function(){
    return notes;
  }

  NoteList.prototype.storeNote = function(note){
    notes.push(note);
  }
  exports.NoteList = NoteList;
})(this);
