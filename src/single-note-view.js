(function(exports){
  
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.noteHTML = function() {
    return "<div>" + this.note.text.substring(0,19) + "..." + "</div>"
  }

  exports.SingleNoteView = SingleNoteView
}) (this)