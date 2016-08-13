var EntityController = require('./entitycontroller');
var Player = require('../entities/player');

class PlayerController extends EntityController {
	constructor(maxHistorySecondBuffer){
		super(maxHistorySecondBuffer);
	}

	add(socket) {
	    var newPlayer, playerFound = false;

	    this.entities.some(function (player) {
	        if (player.id === socket.client.id) {
	            newPlayer = player;
	            playerFound = true;
	            return true;
	        }
	    });

	    if (!playerFound) {
	        newPlayer = new player(socket, this.maxHistorySecondBuffer);
	        this.entities.push(newPlayer);
	    }
	    return newPlayer;
	}

	addInput(id, input, sequence, time) {
	    this.entities.some(function (player) {
	        if (player.id === id) {
	            player.inputs.push({ input: input, seq: sequence, time: time });
	            return true;
	        }
	    });
	}

}

module.exports = PlayerController;