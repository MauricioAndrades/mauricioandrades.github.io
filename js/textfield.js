
// get textarea innertext on focus out
$('textarea').on('focusout', function gettext() {
    console.log($(this).val());
});

