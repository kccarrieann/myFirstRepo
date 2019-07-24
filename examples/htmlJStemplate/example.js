// Storing in expressions

function demofunction(a, b) {

    // Code to be Executed
    return a * b;
}

var x;

function demo() {
    var y;
}



var varname = demofunction

// 
var numbers = {
    first: 1,
    second: 2,
    add: function() {
        return this.first * this.second;
    }
}

numbers.add();


var i;
var x;
var x = new Function("a", "b", "i=a*b");
var y = x(4, 3);

document.getElementById("demo").innerHTML = i;

// Declaring with Constructors Syntax 

var sumVar = new Function(code_to_be_executed);