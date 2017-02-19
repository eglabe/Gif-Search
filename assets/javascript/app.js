// Function to wait to run code until page is ready
$(document).ready(function() {

	// Array holding all of the animals
	var animals = ["hedgehog", "capybara", "koala"];
	// Creates buttons for the given animals in the animals array
	createButton();

    // var animalDiv = $("<div>");

    // // AJAX call for the specific animal button being clicked
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).done(function(response) {



    // }),

    // Function to create buttons!
	function createButton () {

		// Removes all buttons from the button div so buttons won't be duplicated with each loop
		$("#buttonDiv").empty();

		// Loops through the animal array
		for (var i = 0; i < animals.length; i++) {

			// Creates a button and gives it the text and value that the user input
			var animalBtn = $("<button>").text(animals[i]).attr("value", animals[i]);

			// Puts the new button into the button div in the DOM
			$("#buttonDiv").append(animalBtn);
		}
	}

	// When user clicks "Add Animal" button, this code runs
	$("#addAnimal").on("click", function(event){

		// This variable grabs the animal typed in by user
		var animal = $("#animalInput").val().trim();

		// Adds animal input into the animals array
        animals.push(animal);
        console.log(animals);

        // Runs create button function again to add new animals
        createButton();

	});

});







