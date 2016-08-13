var Entity = require('./../entities/entity');

class EntityController(){
	constructor(maxHistorySecondBuffer){
		this.entities = [];
		this.maxHistorySecondBuffer = maxHistorySecondBuffer;
	}

	add(id, referrerId) {
        var newEntity, entityFound = false;

        this.entities.some(function (entity) {
            if (entity.id === id) {
                newEntity = entity;
                entityFound = true;
                return true;
            }
        });

		//если новый 
        if (!entityFound) {
            var referrerSeq = this.entities.filter(function (value) { return value.referrerId === referrerId; }).length;
            newEntity = new entity(id, referrerId, referrerSeq, this.maxHistorySecondBuffer);
            this.entities.push(newEntity);
        }

        return newEntity;
    };

    remove(id) {
        for (var i = 0; i < this.entities.length; i ++) {
            if (this.entities[i].id === id) {
                this.entities.splice(i, 1)[0];
                return;
            }
        }
    };

    clearRegions() {
        for (var i = 0; i < this.entities.length; i ++) {
            this.entities[i].setRegion('');
        }
    };
}


module.exports = EntityController;