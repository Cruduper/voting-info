$(document).ready(function() {
  $("form#age").submit( function() {
    event.preventDefault();
    const inputAge = parseInt( $("#age1").val() );

    if (inputAge >= 18)
    {
      $("#declined").hide();
      $("#approved").show();
    }
    else 
    {
      $("#approved").hide();
      $("#declined").show();
    }
  });
});