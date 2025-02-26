interface takephoto2{
    cameramode:string;
    filter:string;
    burst:number
}

interface story{
    createstory():string;
}

class Instagram2 implements takephoto2,story{
    cameramode: string;
    filter: string;
    burst: number;
    isReel:boolean;
    constructor(cameramode:string,filter:string,burst:number,isReel:boolean){
        this.cameramode=cameramode;
        this.filter=filter;
        this.burst=burst;
        this.isReel=isReel;//we can add more properties than interface defination but not less than that>>
    }
    createstory(): string {
        return 'story uploaded';
    }
}

class Youtube implements takephoto2,story{
    cameramode: string;
    filter: string;
    burst: number;
    isReel:boolean;
    constructor(cameramode:string,filter:string,burst:number,isReel:boolean){
        this.cameramode=cameramode;
        this.filter=filter;
        this.burst=burst;
        this.isReel=isReel;//we can add more properties than interface defination but not less than that>>
    }
    createstory(): string {
        return 'story uploaded';
    }
}

const x=new Youtube('front','no',2,false);
console.log(x);