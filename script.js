// We should wait for the page to load before running our ajax request
$(document).ready(function(){
  // Now we start the Ajax Get request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.

  var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";

  $.get(url, function(response){
    $("#sentences").html(response);
  }).done(function(data) {
    alert("Done");
    console.log(data);
  }).fail(function(error){
    console.log("Something went wrong: " + error);
    $("#sentences").html("Something went wrong: " + error);
  });

});
