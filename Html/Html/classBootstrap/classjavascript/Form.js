// function print() {
//   let Firstname = document.getElementById("Firstname").value;
//   console.log(Firstname);
//   let Lastname = document.getElementById("Lastname").value;
//   console.log(Lastname);
//   let Email = document.getElementById("Email").value;
//   console.log(Email);
//   let Phonenumber = document.getElementById("Phonenumber").value;
//   console.log(Phonenumber);
//   let Password = document.getElementById("Password").value;
//   console.log(Password);
// }

// localStorage.setItem("email", "abc@1234");
// document.write(localStorage.getItem("email"));

// sessionStorage.setItem("email", "testyantra@123");
// document.write(sessionStorage.getItem("email"));

// let a;
// function login() {
//   const val = localStorage.getItem("a");
//   sessionStorage.setItem("sessionId", 123);
//   console.log("a before click ", a);
//   if (val) {
//     a = Number(val);
//   } else {
//     a = 10;
//     localStorage.setItem("a", a);
//   }
// }
// function incrementA() {
//   a += 10;
//   console.log("a after click", a);
//   localStorage.setItem("a", a);
// }
// function logout() {
//   localStorage.clear();
//   sessionStorage.clear();
// }
// sessionStorage.getItem("sessionId");

// console.log("hello"); //semicolon is required when you are writing some code immidiotely after function call
// console.log(10 + 20 > 40 ? "true" : "false");

// nested function
console.log(".............");
function test() {
  {
    console.log("first function");
  }
  function inner() {
    console.log("inner html");
    function outer() {
      console.log("inner ");
    }
    return outer;
  }
  return inner;
}

test()()(); //function currying

//call back function
first = (sec) => {
  setTimeout(() => {
    second();
    sec();
    console.log("first expected");
  }, 1000);
};

second = (sec) => {
  setTimeout(() => {
    console.log("second expected");
  }, 2000);
};
first(second);
second(first);

new Promise(function (resolve, reject) {
  if (15 > 11) {
    resolve("success");
  } else {
    reject("error");
  }
})
  .then(function (data) {
    console.log(data);
  })

  .catch(function (err) {
    console.log(err);
  });

const details = {
  name: "aaaa",
  age: 21,
  isadult: false,
  address: {
    pincode: 636903,
    state: "tamilnadu",
    city: "chennai",
  },
};
console.log(details);
console.log("----after stringify---");
const jsonObject = JSON.stringify(details);
console.log(jsonObject);
console.log("----after parse----");
const JavaScriptObjects = JSON.parse(jsonObject);
