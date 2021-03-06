'use strict';

const Group = require('/lib/group');

class AlarmDriver extends Group.Driver {

    onInit() {
        this.class = 'sensor';
        super.onInit();
    }

    onPair( socket ) {
        super.onPair(socket);
    }

}

module.exports = AlarmDriver;
