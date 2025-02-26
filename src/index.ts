console.log('typescript is here');
console.log('hello')

class User{
    email:string;//we have to defined all member of class in advance in typescript 
    name:string;
    private userId:number;
    constructor(email:string,name:string,userId:number){
        this.email=email;
        this.name=name;
        this.userId=userId;
    }

    //getter
   get getUserId():number{
        return this.userId;
    }
     //setter
     //in setter there is no return types TS not allow to set return type for setter>>
    set setUserId(userId:number){
        this.userId=userId;
    }
}
const hitesh=new User('h@h.com',"hitsh",2);

console.log(hitesh.getUserId);
hitesh.setUserId=10;
console.log(hitesh.getUserId);