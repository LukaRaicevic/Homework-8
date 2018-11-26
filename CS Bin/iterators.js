// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  let sum = 0;
	for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
//const array = [1, 2, 3, 4];
//console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
	let i = 0;
  function inner() {
    const elem = arr[i];
    i++;
    return elem;
  }
  return inner;
}

// Uncomment the lines below to test your work
//const array2 = ['a', 'b', 'c', 'd'];
//const myIterator = returnIterator(array2);
//console.log(myIterator()); // -> should log 'a'
//console.log(myIterator()); // -> should log 'b'
//console.log(myIterator()); // -> should log 'c'
//console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
	let i = 0;
  let bool = false;
  const inner = {
    next: function() {
      const elem = arr[i];
      i++;
      return elem;
    },
    done: function() {
    	if(i === arr.length) {
    		bool = true;
  		}
  		return bool;
  	}
  }
  return inner;
}

// Uncomment the lines below to test your work
//const array3 = [1, 2, 3];
//const iteratorWithNext = nextIterator(array3);
//console.log(iteratorWithNext.next()); // -> should log 1
//console.log(iteratorWithNext.next()); // -> should log 2
//console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  let sum = 0;
  let iterator = nextIterator(arr);
  while(!iterator.done()) {
    sum += iterator.next();
  }
  return sum;
}

// Uncomment the lines below to test your work
//const array4 = [1, 2, 3, 4];
//console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
	let arr = Array.from(set);
  let i = 0;
  const inner = {
    next: function() {
      const elem = arr[i];
      i++;
      return elem;
    }
  }
  return inner;
}

// Uncomment the lines below to test your work
//const mySet = new Set('hey');
//const iterateSet = setIterator(mySet);
//console.log(iterateSet.next()); // -> should log 'h'
//console.log(iterateSet.next()); // -> should log 'e'
//console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
	let i = 0;
  const inner = {
    next: function() {
      const elem = arr[i];
      i++;
      return [i-1, elem];
    }
  }
  return inner;
}

// Uncomment the lines below to test your work
//const array5 = ['a', 'b', 'c', 'd'];
//const iteratorWithIndex = indexIterator(array5);
//console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
//console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
//console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
  let regex = /\s/;
 	return this.str.split(regex);
}

Words.prototype[Symbol.iterator] = function() {
  let i = 0;
  const inner = {
    next: function() {
      const elem = arr[i];
      i++;
      return elem;
    }
  }
  return inner;
}

// Uncomment the lines below to test your work
//const helloWorld = new Words('Hello World');
//for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
	let i = 0;
  let res = "";
  const inner = {
    sentence: function() {
      if(i === 0) {
        res = array[i] + " <- first element!"
      } else {
        res = array[i] + " was found after index " + (i-1);
      }
      i++;
      return res;
    }
  }
  return inner;
}

//const returnedSentence = valueAndPrevIndex([4,5,6]);
//console.log(returnedSentence.sentence());
//console.log(returnedSentence.sentence());
//console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
  const inner = function() {
    if(string === "english") {
      console.log("hello there")
    } else {
      console.log("gibberish");
    }
	}
  yield setInterval(inner, 3000);
}

//console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
  return setInterval(function() {
    console.log("Funny " + noun);
  }, 3000);
}

async function f(noun) {
	return await waitForVerb(noun);
}

f("dog");

