var text = "";
var textArr = [];
// get textarea innertext on focus out
$('textarea').on('focusout', function gettext() {
    console.log($(this).val());
    text = $(this).val().split("/\n");
});

// split text line by line


textArr = text.split("/\n");
console.log(text);
console.log(textArr);


var parse = function(){
  var str = $('textarea').val();
  var results = str.split("\n");
  $.each(results, function(index, element){
    console.log(element);
  });
};


$(function(){
  $('button').on('click', parse);
});


console.log("textfield");