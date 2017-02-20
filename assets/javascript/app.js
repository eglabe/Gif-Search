// Function to wait to run code until page is ready
$(document).ready(function() {

	// Array holding all of the animals
	var animals = ["hedgehog", "capybara", "koala"];
	// Creates buttons for the given animals in the animals array
	createButton();

    // var animalDiv = $("<div>");

    $(".myBtn").on("click", function() {

		// Selects the value from the button being clicked
	    var animal = $(this).attr("value");
	    // Inserts animal name into the API URL to be searched
	    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

	    // AJAX call for the specific animal button being clicked
	    $.ajax({
	      url: queryURL,
	      method: "GET"
	    }).done(function(response) {

	    	var results = response.data;

        	for (var i = 0; i < results.length; i++) {

		    	var src = results[i].images.fixed_height.url;

		    	var animateURL = results[i].images.fixed_height.url;

		    	var stillURL = results[i].images.fixed_height_still.url;

		    	var gif = $("<img>").attr({
		    		src: stillURL,
		    		animate: animateURL,
		    		still: stillURL,
		    		state: "still",
		    		alt: animal

		    	$("#gifDiv").append(gif);
		    	
		    	});
		    }

	    });
	});

    // Function to create buttons!
	function createButton () {

		// Removes all buttons from the button div so buttons won't be duplicated with each loop
		$("#buttonDiv").empty();

		// Loops through the animal array
		for (var i = 0; i < animals.length; i++) {

			// Creates a button and gives it the text and value of the user input,
			// as well as a class of "myBtn"
			var animalBtn = $("<button>").text(animals[i]).attr("value", animals[i]).attr("class", "myBtn");

			// Puts the new button into the button div in the DOM
			$("#buttonDiv").append(animalBtn);
		}
	}

	// When user clicks "Add Animal" button, this code runs
	$("#addAnimal").on("click", function(event){

		// This variable grabs the animal typed in by user
		var animalInput = $("#animalInput").val().trim();

		// Adds animal input into the animals array
        animals.push(animalInput);
        console.log(animals);

        // Runs create button function again to add new animals
        createButton();

	});

});







