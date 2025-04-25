let a=10;
let b=10;
let c=a+b;
console.log("addition is:"+c);



class Value(){
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    addition(){
        return this.a+this.b;
    }
    subtraction(){
        return this.a-this.b;
    }
    multiplication(){
        return this.a*this.b;
    }
    division(){
        return this.a/this.b;
    }
}

let obj=new Value(10,20);   
console.log("addition is:"+obj.addition());
console.log("subtraction is:"+obj.subtraction());
console.log("multiplication is:"+obj.multiplication());
console.log("division is:"+obj.division());
