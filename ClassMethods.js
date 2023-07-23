// Instance Method
class RE{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }

    congratulate(){
        return `Hey congrtats on buying ${this.model} in ${this.color} color !!!`;
    }

  
// Getter Method

GetModel() { 
return this.model;
}

GetColor() {
return this.color;
}

// Setter Method

SetModel(model2) {
this.model = model2;
}

SetColor(color2) {
this.color = color2;
}

}

const mybike = new RE("GT650","Mr.Clean");

console.log(mybike.GetModel());
console.log(mybike.GetColor());

mybike.SetModel('INT650');
mybike.SetColor('INT650');

console.log(mybike.GetModel());
console.log(mybike.GetColor());

console.log(mybike.congratulate());



// Static Method

class MathOperations {
    static add(x, y) {
      return x + y;
    }
  
    static multiply(x, y) {
      return x * y;
    }
  }
  
  console.log(MathOperations.add(5, 3));
  console.log(MathOperations.multiply(5, 3)); 
