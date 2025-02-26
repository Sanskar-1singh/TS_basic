"use strict";
class takephoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    getReelTime() {
        return 0;
    }
}
class Instagram extends takephoto {
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getsepia() {
        console.log('hello');
    }
}
const hc = new Instagram('f', 'n', 2);
console.log(hc);
hc.getsepia();
console.log(hc.getReelTime());
//in abstract class we can give default implementation to our method which can be either overrided by extending class or not>>
