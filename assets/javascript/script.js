var actors = ['Steve Carell', 'Rainn Wilson', 'Denzel Washington', 'Robert De Niro', 'Will Smith', 'Dwayne Johnson', 'Leonardo DiCaprio', 'Tom Hanks', 'Matt Damon', 'Matthew Mcconaughey'];

function renderButtons() {

  $('#buttons-area').empty();

  for (var i = 0; i < actors.length; i++) {

    var a = $('<button>')
    a.addClass('actor mr-2 mt-2 btn btn-outline-dark font-weight-bold');
    a.attr('data-name', actors[i]);
    a.text(actors[i]);
    $('#buttons-area').append(a);
  }
}

$("#add-actor").on("click", function (event) {

  event.preventDefault();

  var actor = $("#actor-input").val().trim();

  actors.push(actor);
  renderButtons();

})

function displayGifs() {

  var actor = $(this).attr("data-name");
  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=shdzi6JVG0giuCjCAOWpMiqAhktpp8uT";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    console.log(response.data);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var gifDiv = $('<div class="gifs col-lg-3 col-md-6 col-sm-12 text-center mt-3">');
      var actorGif = $('<img>');
      actorGif.attr('src', results[i].images.fixed_height_still.url);

      actorGif.attr('title', "Rating: " + results[i].rating);
      actorGif.attr('data-still', results[i].images.fixed_height_still.url);
      actorGif.attr('data-state', 'still');
      actorGif.addClass('gif');
      actorGif.attr('data-animate', results[i].images.fixed_height.url);

      gifDiv.append(actorGif)

      $("#gifs-area").prepend(gifDiv);
    }

  });
}

$(document).on('click', '.gif', function(){
	var state = $(this).attr('data-state');
		if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            };
});

$(document).on("click", ".actor", displayGifs);

renderButtons();