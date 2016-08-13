var Entity = require('./entity');

class Player extends Entity {
	constructor(socket, maxHistorySecondBuffer){
		super(socket.client.id, null, null, maxHistorySecondBuffer);
		this.socket = socket;
		this.inputs = [];
	}

	setRegion(region) {
	    this.socket.join(region);
	    this.socket.leave(this.region);
	    this.region = region;
	};

	addState(state, executionTime) {
	    this.addHistory(state, executionTime);
	    this.state = state;
	    this.sequence += this.inputs.length;
	    this.inputs = [];
	};
}

module.exports = Player;