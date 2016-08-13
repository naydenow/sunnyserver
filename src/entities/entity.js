var history = require('./history');

class Entity {

	constructor(id, referrerId, referrerSeq, maxHistorySecondBuffer){
	    this.state = {};
	    this.sequence = 1;
	    this.id = id;
	    this.referrerId = referrerId;
	    this.referrerSeq = referrerSeq;
	    this.maxHistorySecondBuffer = maxHistorySecondBuffer;
	    this.stateHistory = [];
	    this.region = '';
	};

 	addState(state, executionTime) {
        this.addHistory(state, executionTime);
        this.state = state;
        this.sequence += 1;
    };

    addHistory(state, executionTime) {
        var minTime, spliceTo = 0, newHistory = new history(state, executionTime);

        this.stateHistory.push(newHistory);
        minTime = this.stateHistory[this.stateHistory.length - 1].executionTime - this.maxHistorySecondBuffer;

        for (var i = 0; i < this.stateHistory.length; i ++) {
            if (this.stateHistory[i].executionTime > minTime) {
                spliceTo = i - 1;
                break;
            }
        }

        if (spliceTo > 0) {
            this.stateHistory.splice(0, spliceTo);
        }

    };

    setRegion(region) {
        this.region = region;
    }

}

module.exports = Entity;