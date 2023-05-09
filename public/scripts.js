// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var variant = false;
var singlePlayer = true;

// Play game 
async function playGame() {
	var player = document.getElementById("player");
	var opponent = document.getElementById("opponentShot");
	var result = document.getElementById("result");
	var results = document.getElementById("results");

	if (variant) {
		// RPSLS
		if (singlePlayer) {
			// No opponent
			result.innerHTML = `Result: ${json.player}`;
			const response = await fetch(`/app/rpsls/play`);
			const data = await response.json();
			console.log(data);
		} else {
			// Has opponent
			var shot;
        	var shots = document.getElementsByName("shot");
        	for (var i = 0, length = shots.length; i < length; i++) {
            	if (shots[i].checked) {
            	    shot = shots[i].value;
                	break;
            	}
        	}

			const response = await fetch(`/app/rpsls/play/${shot}`);
			const data = await response.json();

			player.innerHTML = `Player: ${data.player}.`;
      		opponent.innerHTML = `Opponent: ${data.opponent}.`;
      		result.innerHTML = `Result: ${data.result}.`;

			console.log(data);
		}
	} else {
		// RPS
		if (singlePlayer) {
			// No opponent
			result.innerHTML = `Result: ${json.player}`;
			const response = await fetch(`/app/rps/play`);
			const data = await response.json();
			console.log(data);
		} else {
			// Has opponent
			var shot;
        	var shots = document.getElementsByName("shot");
        	for (var i = 0, length = shots.length; i < length; i++) {
            	if (shots[i].checked) {
            	    shot = shots[i].value;
                	break;
            	}
        	}

			const response = await fetch(`/app/rps/play/${shot}`);
			const data = await response.json();

			player.innerHTML = `Player: ${data.player}.`;
      		opponent.innerHTML = `Opponent: ${data.opponent}.`;
      		result.innerHTML = `Result: ${data.result}.`;

			console.log(data);
		}
	}
	results.className = "inline";
	player.className = "show";
	opponent.className = "show";
	result.className = "show";
}

// Select RPS or RPSLS
async function selectRPS() {
	variant = false;
	document.getElementById("lizard").className = "hide";
	document.getElementById("spock").className = "hide";
	document.getElementById("rock").className = "show";
	document.getElementById("paper").className = "show";
	document.getElementById("scissors").className = "show";
	selectOpp();
}

async function selectRPSLS() {
	variant = true;
	document.getElementById("lizard").className = "show";
	document.getElementById("spock").className = "show";
	document.getElementById("rock").className = "show";
	document.getElementById("paper").className = "show";
	document.getElementById("scissors").className = "show";
	selectOpp();
}

// Select single/with opponent
async function selectOpp() {
	const rps = document.getElementById("rps");
	const rpsls = document.getElementById("rpsls");
	const opponent = document.getElementById("opponent");
	const rpsShots = document.getElementById("shots");
	const rpslsShots = document.getElementById("rpslsShots");

	rpsShots.className = "show";
    	if (opponent.checked && !variant) {
        	rpsShots.className = "show";
			rpslsShots.className = "hide";
        	singlePlayer = false;
    	} else if (opponent.checked && variant) {
        	rpsShots.className = "show";
  	        rpslsShots.className = "show";
        	singlePlayer = false;
    	} else {
        	rpsShots.className = "hide";
   	    	rpslsShots.className = "hide";
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
