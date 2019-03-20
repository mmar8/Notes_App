(function(exports){

  function Note(texts){
    this.text = texts;
  };
  Note.prototype.getText = function(){
     return this.text;
  }
  exports.Note = Note;

})(this);
