(function(exports){
  var listOfNotes;

  function NoteListView(noteList){
    listOfNotes = noteList;
  };
  NoteListView.prototype.view = function(){

      if (listOfNotes.getNotes().length === 0){
        return "<ul></ul>"
      }
      else if(listOfNotes.getNotes().length === 1){
          return "<ul><li><div>"+listOfNotes.getNotes()[0].getText()+"</div></li></ul>"
        }
      else {

        }
  }
  exports.NoteListView = NoteListView;
})(this);
