"use strict";
class Instagram2 {
    constructor(cameramode, filter, burst, isReel) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
        this.isReel = isReel; //we can add more properties than interface defination but not less than that>>
    }
    createstory() {
        return 'story uploaded';
    }
}
class Youtube {
    constructor(cameramode, filter, burst, isReel) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
        this.isReel = isReel; //we can add more properties than interface defination but not less than that>>
    }
    createstory() {
        return 'story uploaded';
    }
}
const x = new Youtube('front', 'no', 2, false);
console.log(x);
