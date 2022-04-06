const calculator = {
    add :function(a, b){
        console.log(a + b);
    },
    minus :function(a, b){
        console.log(a - b);
    },
    multiply :function(a, b){
        console.log(a * b)
    },
    division :function(a, b){
        console.log(a / b);
    },
    powerOf :function(a, b){
        console.log(a ** b);
    },
};

calculator.add(5, 2);
calculator.minus(90, 3);
calculator.multiply(30, 2);
calculator.division(42, 7);
calculator.powerOf(2, 8);