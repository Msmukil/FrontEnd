var a = "20";
var b = 20;
var c = "ddd" / 2 + 22 + 22;
console.log(c);
console.log(a == b);

var x = 2 > 3 ? "hello" : "bye";
console.log(x);
var x = 2 < 3 ? "hello" : "bye";
console.log(x);
var x = 3 > 2 > 1;
console.log(x);
var x = 1.2 + 1.4 == 2.6;
console.log(x);

function getName(a, b) {
  console.log(a + b);
}
getName(3, 5);

var getName1 = function (a, b) {
  console.log(a - b);
};
getName1(20, 10);
// anonymous function

var sub = function (a, b) {
  return a - b;
};
console.log(sub(20, 10));
//immediate invoked function
var mul = function () {
  console.log("immediate invoked functi0n");
};
mul();
// //call back function
function addnumbers(a, b) {
  return a + b;
}
function result(sum) {
  return sum + 100;
}

//call back function

function greeting(welcome) {
  welcome("mukil");
}
function welcome(name) {
  console.log("hello", name);
}
greeting(welcome);

// array in reference

var arr1 = ["a", 1, true, { ename: "mukilan" }];
console.log(arr1);
var arr = [11, 12, 13, 14];
for (let index = 0; index < arr.length; index++) {
  console.log((arr[index] = arr[index] + 20));
}

console.log(arr);
for (let index = 0; index < arr.length; index++) {
  console.log(arr1[index]);
}
// object

var person = {
  name: "mukil",
  last: "an",
  age: 21,
  blood: "o+",
};
for (var key in person) {
  console.log(key);
}
//string methods
var str = "Hello";
var res = str.toUpperCase;
console.log(res);
var lower = str.toLowerCase();
console.log(lower);
console.log(str.charAt(3));

var greet = "goodafternoon";
console.log(greet.indexOf("0"));
console.log(greet.includes("noon"));
console.log(greet.replace("noon", "afternoon"));
//math object

var number = Math.min(1, 22, 33, 44, 55);
console.log(number);

var number2 = Math.max(1, 22, 33, 44, 55);
console.log(number2);

var val = ["ram", "mukil", "ravi"];
var randamIndex = Math.floor(Math.random() * val.length);
console.log(randamIndex);
console.log(val[randamIndex]);

// console.log(Math.floor(number3));
// console.log(Math.ceil(4.2));

var myArray = [
  "mukil",
  21,
  true,
  undefined,
  null,
  { color: "black" },
  ["red", "blue", "pink"],
];
console.log(myArray[2]);
console.log(myArray[4]);
console.log(typeof myArray[3]);
console.log(myArray[5].length);
console.log(myArray[5].color);
console.log(myArray[5]["color"]);
console.log(myArray.length);
console.log(myArray[5]["co  lor"]);
console.log(myArray[6].length);
console.log(myArray[6][0]);
console.log(myArray[6][2 - 1]);

// array of objects
var arr = [10, 20, 30, 40, 50, 60];
var mapMethod = arr.map((value, index, array) => {
  console.log(value + 10);
  console.log(index);
  console.log(array);
});

var books = [
  {
    bookName: "Dairy of a young girl",
    author: "anni",
    price: 200,
    publication: "sapna",
  },
  {
    bookName: "Mahabharatha",
    author: "vyasa",
    price: 300,
    publication: "renuka book house",
  },
  {
    bookName: "valmiki",
    author: "ramayana",
    price: 400,
    publication: "raj",
  },
];
books.map((val, ind) => {
  console.log(val.author);
  console.log(val.bookName);
  console.log(val.price);
  console.log(val.publication);
});

var age = [23, 22, 13, 11, 55, 66];
age.filter((value, index, arry) => {
  if (value > 20) {
    console.log("yes" + index);
  } else {
    console.log("no" + index);
  }
  console.log(value);
});

var a = [1, 2, 3];
smallvalues = a.filter(function (x, i, a) {
  return x < 3;
});
console.log(a);
everyother = a.filter(function (x, i) {
  // return i % 2 == 0;
  return x + 4;
});
console.log(everyother);

// var a = 67687;
// var a = 11223;

// const c = 20;
// console.log(c++);

let systemDAte = new Date();
console.log(systemDAte.getDate());
console.log(systemDAte.getDay());
console.log(systemDAte.getFullYear());
console.log(systemDAte.getSeconds());
console.log(systemDAte.getHours());
console.log(systemDAte.getMilliseconds());
console.log(systemDAte.getMinutes());
console.log(systemDAte.getMonth());
console.log(systemDAte.getTime());

let date1 = new Date("oct/09/2000");
console.log(date1);

let monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let dateVal = date1.getDate();
let dateMonth = monthNames[date1.getMonth()];
let dateFull = date1.getFullYear();

var fullDate = `${dateMonth}/${dateVal}/${dateFull}`;
console.log(fullDate);

let num = 33;
let numcopy = num;
console.log(num, numcopy);

let arry = [1, 2, 3, 4, 5];
let arrcopy = arry; //this case both arr and arrcopy referring
arrcopy.push(33);
console.log(arry, arrcopy);

//using spreadoperator(..)

// this is shalow copy first layer of array or object|will be copied
let arr2 = [2, 3, 4, 5, 6, 7];
let arr2copy = [...arr2]; // here the address will be different
arr2copy.push(55);
console.log(arr2, arr2copy);

let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, 9, 0, 2]];

// object copy

let person1 = {
  pname: "mukilan",
  age: 21,
  persentage: "95%",
};

let personCopy = { person1 }; //shallow copy
person1.pname = "mukil";
personCopy.phNumber = "987654321";
console.log(person1, personCopy);

// deep copy
const movie = {
  moviename: "spiderman",
  director: "Mmm",
  moredetails: {
    hero: "aa",
    heroine: "bbb",
    villain: "ccc",
  },
};

let movieCopy = { ...movie }; //deep copy
movieCopy.numberofdays = 100;
movie.heroine = "lithika";

console.log(movie, "movies");
console.log(movieCopy, "movieCopy");

//rest operator

function addNumbers(...nums) {
  let sum = 0;
  console.log(typeof nums);
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  console.log(`sum - ${sum}`);
}
addNumbers(10, 20, 30);
addNumbers(10, 20);
addNumbers(10, 50, 60, 70, 80);

let obj = {
  name1: "mukil",
  age1: 21,
  id: "ty",
};
// //
const { name1, age1, id } = obj;
console.log(obj.name1);
console.log(name1);

const hobbies = ["dancing", "rampwalk", "travelling", "swimming"];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(`hobby1-${hobby1}`);
console.log(`hobby2-${hobby2}`);
console.log(`hobby3-${hobby3}`);

// console.log(window);
var a = 33;
// console.log(window.document);
// console.log(window.history);
// console.log(window.navigator);

// navigator.geolocation.getCurrentPosition((loc) => {
//   console.log("location", loc);
// });

// //

console.log(this == window);
{
  console.log(this);
}
add();

let person4 = {
  name: "raj",
  age: 21,
  sal: function add() {
    console.log(this);
  },
};
person4.sal();
