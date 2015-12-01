var text = "";
// get textarea innertext on focus out
$('textarea').on('focusout', function gettext() {
    console.log($(this).val());
    text = $(this).val().split("/\n");
});

// split text line by line

text.split("/\n");
console.log(text);


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