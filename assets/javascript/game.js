$(document).ready(function() {
	var randomNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Number;
	var crystal2Number;
	var crystal3Number;
	var crystal4Number;

	function newNumbers() {
		randomNumber = Math.floor(Math.random() * 110) + 10;
		crystal1Number = Math.ceil(Math.random() * 12);
		crystal2Number = Math.ceil(Math.random() * 12);
		crystal3Number = Math.ceil(Math.random() * 12);
		crystal4Number = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#randomNumber").text(randomNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1Number);
		$("#crystal2").attr("data-crystalvalue", crystal2Number);
		$("#crystal3").attr("data-crystalvalue", crystal3Number);
		$("#crystal4").attr("data-crystalvalue", crystal4Number);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		//console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
	}

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystalimg").hover(function() {
		$(this).css({opacity: 0.5});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together after clicking previous crystal
	$(".crystalimg").on("click", function() {
		if (totalScore >= randomNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === randomNumber) {
			youWin();
		} else if (totalScore > randomNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});

        // Speudo coding

        // Game with 4 crystals and Random Result 
        // Every crystal needs to have a random number 1-12
        // A new random number should be generated to the crystals every single time we win or lose
        // When clicking any crystal it should add with previous crystal clicked 
        // If the number is greater than the Random Result we decrement a lost counter  
        // If the number is equal then increment a win counter 