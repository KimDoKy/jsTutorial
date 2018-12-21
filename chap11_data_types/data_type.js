var length = 16; // number
var lastName = "John"; // str
var x = {firstName:"John", lastName:"Doe"}; // object

// exponential
var y = 123e5; // 12300000
var z = 123e-5; // 0.00123

// boolean
var x = true;
var y = false;

// arrays
var cars = ["Saab", "Volvo", "BMW"]; // index start zero.

// object
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"Blue"};

// typeof

typeof ""  // str
typeof "John" // str
typeof o // number
typeof (3 + 4) // number
typeof true // boolean
typeof [1,2,3,4] // object. not array
typeof {name:"John", age:34} // object
typeof function myFunc(){} // function
// 값이 없는 변수는 typeof를 사용해도 정의되지 않음.

// undefined 를 사용하면 변수를 비울 수 있다.
person = undefined;

// null 를 사용하면 object를 비울 수 있다.
var person = null;
