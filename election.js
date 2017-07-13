document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData) {
    for (var i = 0; i < responseData.candidates.length; i++) {
      var candidate = responseData.candidates[i]
      console.log(candidate)
    }

  })

});
