(function(exports) {
  
  function NoteController(notelist) {
  this.notelist = notelist
  var newNote = new Note("Favourite drink: seltzer")
  this.notelist.storeNote(newNote)
  this.noteListView = new NoteListView(this.notelist)
  }

  NoteController.prototype.getHTML = function() {
    return this.noteListView.view() 
  }

  exports.NoteController = NoteController

})(this)
