"use strict";
console.log('typescript is here');
console.log('hello');
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    //getter
    get getUserId() {
        return this.userId;
    }
    //setter
    //in setter there is no return types TS not allow to set return type for setter>>
    set setUserId(userId) {
        this.userId = userId;
    }
}
const hitesh = new User('h@h.com', "hitsh", 2);
console.log(hitesh.getUserId);
hitesh.setUserId = 10;
console.log(hitesh.getUserId);
