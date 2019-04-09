$(document).ready(function () {

  var animalNames = ['Cat', 'Dog', 'Goat', 'Monkey', 'Panda', 'Rabbit', 'Sloth'];

  createButton();

  function createButton() {
    $(".buttons-here").empty();

    for (var i = 0; i < animalNames.length; i++) {
      var gif = $("<button>");
      gif.addClass("btn btn-outline-light mr-3 font-weight-bold");
      gif.attr("data-name", animalNames[i]);
      gif.append(animalNames[i]);
      $(".buttons-here").append(gif);
    }

  }

  $("#add-button").on("click", function (event) {

    event.preventDefault();

    var newButton = $("#user-input").val().trim()
    animalNames.push(newButton);
    createButton();
    
  });


})