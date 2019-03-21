// (function(exports){
  // var listOfNotes;

  function NoteListView(noteList){
    this.noteList = noteList;
  };
  NoteListView.prototype.view = function(){
      var htmlString = "<ul>"
      this.noteList.getNotes().forEach(function(note){
        htmlString+="<li><div>"+note.getText()+"</div></li>"
      })
      htmlString += "</ul>"
      return htmlString;
  };
  // exports.NoteListView = NoteListView;
// })(this);
