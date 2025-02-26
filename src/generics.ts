interface quiz{
    name:string;
    type:string;
}

interface course{
    name:string;
    author:string;
    subject:string
}

class sellable<T>{
    public cart:T[]=[];
    addTocart(product:T){
        this.cart.push(product);
    }
}
const x=new sellable<quiz>();
const y=new sellable<course>();
x.addTocart({name:'hlw',type:'sem1'});
console.log(x);
y.addTocart({name:'f',author:'g',subject:'c'});
console.log(y);
export{}