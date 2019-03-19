(function(exports){
  var text;
  function Note(texts){
    text = texts;
  };
  Note.prototype.getText = function(){
    return text;
  }
  exports.Note = Note;
  
})(this);
