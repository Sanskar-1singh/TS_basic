abstract class takephoto{
     public cameramode:string;
     public filter:string;
     constructor(cameramode:string,filter:string){
          this.cameramode=cameramode;
          this.filter=filter
     }
     abstract getsepia():void;
    getReelTime():number{
        return 0;
    }
}

class Instagram extends takephoto{
    constructor(
        public cameramode:string,
        public filter:string,
        public burst:number
    ){
        super(cameramode,filter);
    }
    getsepia(): void {
        console.log('hello');
    }
}

const hc=new Instagram('f','n',2);
console.log(hc);
hc.getsepia();
console.log(hc.getReelTime());

//in abstract class we can give default implementation to our method which can be either overrided by extending class or not>>