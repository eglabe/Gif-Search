// Function to wait to run code until the page is ready
$(document).ready(function() {

	// Array holding all of the animals
	var animals = ["hedgehog", "capybara", "koala"];
	// Creates buttons for the given animals in the animals array
	createButton();

	// When a "myBtn" button is clicked, this function runs...
    $("#buttonDiv").on("click", ".myBtn", function() {

		// Selects the value from the button being clicked
	    var animal = $(this).attr("value");
	    // Inserts animal name into the API URL to be searched
	    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
		
		// Empties the gif div of previous gifs 
		$("#gifDiv").empty();

	    // AJAX call for the specific animal button being clicked
	    $.ajax({
	      url: queryURL,
	      method: "GET"
	    }).done(function(response) {

	    	// Putting the API response in a variable
	    	var results = response.data;

	    	// Loops through the number of gifs called for
        	for (var i = 0; i < results.length; i++) {

        		// Puts the animate and still gif urls in variables
		    	var animateURL = results[i].images.fixed_height.url;
		    	var stillURL = results[i].images.fixed_height_still.url;

		    	// Creates img tag and assigns urls to different attributes in that tag
		    	var gif = $("<img>").attr({
		    		class: "gif",
		    		src: stillURL,
		    		animate: animateURL,
		    		still: stillURL,
		    		state: "still",
		    		alt: animal
		    	});

		    	// Makes the gif visible in the DOM
		    	$("#gifDiv").append(gif);

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
			var animalBtn = $("<button>").text(animals[i]).attr({value: animals[i], class: "myBtn"});

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


    $("#gifDiv").on("click", ".gif", function() {

    	var state = $(this).attr("state");

	    if (state == "still") {
	        $(this).attr("src", $(this).attr("animate"));
	        $(this).attr("state", "animate");
	    } else {
	        $(this).attr("src", $(this).attr("still"));
	        $(this).attr("state", "still");
	    }

    });

});







