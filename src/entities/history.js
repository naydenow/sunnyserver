"use strict";

/**
 * Класс истории состояний
 */

class History {

	/**
	 * [constructor description]
	 * @param  {[type]} state         [description]
	 * @param  {[type]} executionTime [description]
	 * @return {[type]}               [description]
	 */
	
	constructor(state, executionTime) {
	    this.state = state;
	    this.executionTime = executionTime;
	}
}

module.exports = History;
