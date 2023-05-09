// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


var variant = false;
var singlePlayer = true;

// Play game 
async function playGame() {
	// var rps = document.getElementById('rps').checked;
    	// var rpsls = document.getElementById('rpsls').checked;

	var player = document.getElementById("playerChoice");
	var opponent = document.getElementById("oppChoice");
	var result = document.getElementById("result");

	/*
	if (!rps && !rpsls) {
		document.getElementById('result').innerText = 'Choose a game mode.';
	} else if (rps) {
		variant = false;
	} else {
		variant = true;
	}
	*/

	if (variant) {
		// RPSLS
		if (singlePlayer) {
			// No opponent
			const response = await fetch(`/app/rpsls/play`);
			const data = await response.json();
		} else {
			// Has opponent
			const response = await fetch(`/app/rpsls/play/${shot}`);
			const data = await response.json();

			player.innerHTML = `Player: ${data.player}.`;
      			opponent.innerHTML = `Opponent: ${data.opponent}.`;
      			result.innerHTML = `Result: ${data.result}.`;
		}
	} else {
		// RPS
		if (singlePlayer) {
			// No opponent
			const response = await fetch(`/app/rps/play`);
			const data = await response.json();
		} else {
			// Has opponent
			const response = await fetch(`/app/rps/play/${shot}`);
			const data = await response.json();

			player.innerHTML = `Player: ${data.player}.`;
      			opponent.innerHTML = `Opponent: ${data.opponent}.`;
      			result.innerHTML = `Result: ${data.result}.`;
		}
	}
}

// Select RPS or RPSLS
async function selectRPS() {
	variant = false;
	document.getElementById("lizard").className = "hide";
	document.getElementById("spock").className = "hide";
	selectOpp();
}

async function selectRPSLS() {
	variant = true;
	document.getElementById("lizard").className = "show";
	document.getElementById("spock").className = "show";
	selectOpp();
}

// Select single/with opponent
async function selectOpp() {
	const rps = document.getElementById("rps");
	const rpsls = document.getElementById("rpsls");
	const opp = document.getElementById('#opponent');

	rps.className = "show";
    	if (opp.checked && !variant) {
        	rps.className = "show";
		rpsls.className = "hide";
        	singlePlayer = false;
    	} else if (opp.checked && variant) {
        	rps.className = "show";
  	        rpsls.className = "show";
        	singlePlayer = false;
    	} else {
        	rps.className = "hide";
   	    	rpsls.className = "hide";
        	singlePlayer = true;
    	}

}

// Reset game
function reset() {
	location.reload();
}

// Display rules
function displayRules() {
	if (document.getElementById("rules").className == "hide") {
		document.getElementById("rules").className = "inline";
	} else {
		document.getElementById("rules").className = "hide";
	}
}

