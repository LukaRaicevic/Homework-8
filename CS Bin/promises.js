// Challenge 1

function sayHello() {
  setTimeout(function() {
    console.log("Hello");
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(function() {
    resolve("Resolved!");
  }, 1000);
});

promise.then(function(resolveMsg) {
  console.log(resolveMsg);
});
// Should print out "Resolved!"



// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject("Rejected!")
});

promise.catch(function(rejectMsg) {
  console.log(rejectMsg)
});
// Should print out "Reject!"



// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve("Promise has been resolved!");
});

// Uncomment the lines below when ready
promise.then((resolveMsg) => console.log(resolveMsg));
console.log("I'm not the promise!");
// "I'm not the promise!" ce se stampati prvo, jer promisi idu u microtask queue
// i izvrsavaju se poslednji

// Challenge 5
function delay(){
	return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, 1000);
  });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise(function(resolve, reject) {
  resolve("Second!");
});

var firstPromise = new Promise(function(resolve, reject) {
  resolve(secondPromise);
});

firstPromise.then(function(value) {
  console.log(value);
});


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)])
  .then(function(values) {
    console.log(values);
  });	
}

getAllData();


