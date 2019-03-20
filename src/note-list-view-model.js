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
            var htmlString = "<ul>"
          listOfNotes.getNotes().forEach(function(note){
            htmlString+="<li><div>"+note.getText()+"</div></li>"
          })
          htmlString += "</ul>"
          return htmlString;
        }
  };
  exports.NoteListView = NoteListView;
})(this);
