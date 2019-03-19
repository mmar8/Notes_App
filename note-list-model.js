(function(exports){
  var notes;
  function NoteList(){
    notes = [];
  };
  NoteList.prototype.getNotes = function(){
    return notes;
  }
  exports.NoteList = NoteList;
})(this);
