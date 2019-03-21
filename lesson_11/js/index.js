'use strict'

console.log("task_1");

const user = {
  name: "John Smith",
  sayHi: function () {
    alert(this.name)
  },
  timeoutSayHi: function () {
    setTimeout(this.sayHi.bind(this), 1000);
  }
};

user.sayHi();
user.timeoutSayHi();

console.log("task_2");

const group = {
  users: ['student 1', 'student 2'],
  sayHi: function(user) {
    console.log(`Hi ${user}`);
  },
  sayHiToAll: function() {
    this.users.forEach((user) => {
      this.sayHi(user)
    })
  }
}
group.sayHiToAll();

console.log("task_3");

function callWithTimer(func) {
  return function(...args) {
    console.time('label');
    let result = func.apply(this, args);
    console.timeEnd('label');
    return result;
    
  }
}


function testFunction() {
  const arr = new Array(500).fill('test');
  
  const newArr = arr.map((el, index) => `${el}_${index}`);
  return newArr;
}

const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log('result: ', result)



