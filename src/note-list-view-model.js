(function(exports){
  var listOfNotes;

  function NoteListView(noteList){
    listOfNotes = noteList;
  };
  NoteListView.prototype.view = function(){
      var htmlString = "<ul>"
      listOfNotes.getNotes().forEach(function(note){
        htmlString+="<li><div>"+note.getText()+"</div></li>"
      })
      htmlString += "</ul>"
      return htmlString;
  };
  exports.NoteListView = NoteListView;
})(this);
