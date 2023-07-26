# question 2 :- 
1.Rahul is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at
12:00 p.m. and dinner at 7:00 p.m. in the evening.
Create a javascript function that takes in the current time as a string and determines the
 duration of time before rahul's next meal. Represent this as an array with the first and
second elements representing hours and minutes, respectively.
 Example:
 timeToEat("2:00 p.m.") ➞ [5, 0]
 //( 5 hours until the next meal, dinner)
 timeToEat("5:50 a.m.") ➞ [1, 10]
 // (1 hour and 10 minutes until the next meal, breakfast)

 # ans :-
 1. Parse the input time string to extract the hours and minutes. <br>
2. Convert the parsed hours and minutes into minutes since midnight for easier calculations.<br>
3. Calculate the time remaining in minutes until the next meal.<br>
4. Convert the remaining time back into hours and minutes. <br>
5. Return the result as an array. <br>

### codes in index.js


<hr>

# question 3 :-
How many ways to convert an Object {} into an Array [] and Array [] to Object{} in
JavaScript ?

# ans:-
 * if i want  convert Object {} into an Array [] i can use three method :- <br>
 
 1. Object.keys():-<br>
 const person = {
    firstName: 'John',
    lastName: 'Doe'
};
const propertyNames = Object.keys(person);
console.log(propertyNames);


 3. Object.entries() :- <br>
 const myObject = {
  key1: value1,
  key2: value2,
};
const myArray = Object.entries(myObject);
console.log(myArray)

3. Using Object.keys() and Array.map() method:-<br>
 const myObject = {
  key1: value1,
  key2: value2,
};
const myArray = Object.keys(myObject).map(key => myObject[key]);
console.log(myArray);


 <hr>
 
* if i want convert Array [] to Object{}  then  <br>

 1. Using a for loop:- <br>
 function arrayToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}
 <br>
 
3. Using Array reduce() method:- <br>
function arrayToObject(arr) {
  return arr.reduce((obj, currentVal, index) => {
    obj[index] = currentVal;
    return obj;
  }, {});
}

<br>

3. Using Object.assign() with Spread Operator:-<br>
function arrayToObject(arr) {
  return Object.assign({}, ...arr.map((val, index) => ({ [index]: val })));
}

4. Using Object.keys() and Array forEach():-<br>
function arrayToObject(arr) {
  const obj = {};
  Object.keys(arr).forEach((key, index) => {
    obj[index] = arr[key];
  });
  return obj;
}
<!-- ************************************ -->


