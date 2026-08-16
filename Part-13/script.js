//Async Functions==>Async functions are the clean and compact way to to doing asynchronus work.
// async and await

//Creates an async function
//Async function bydefault return a promise.

async function greet() {
  //   abc.abd(); //Promise {<rejected>: ReferenceError: abc is not defined
  return "hello world!"; //return a promise. eventhough we dont write return promise statement.
}
// let hello = async () => {}; //returns a promise.
//If function through error then in that case promise state will we rejected.

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log(`Result was ${result}`);
  })
  .catch((err) => {
    console.log("promise was rejected", err);
  });

//We can also make arrow function async.
let demoo = async () => {
  return 5;
};
demoo(); //Promise {<fulfilled>: 5}

//Await keyword=>Pauses the execution of its surrounding async function until the promise is settled(resolved or rejected).

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      //   //Part ho handling rejections.
      //   if (num > 3) {
      //     reject("promise rejected");
      //   }
      console.log(num);
      resolve();
    }, 1000);
  });
}
async function demo() {
  //Here wo dont want to execute all calls simultaneously we want one-by-one.
  // We use await here.
  await getNum(); //Jab tak iska promise resolve nhi ho jata banki calls nhi jayegi.
  await getNum();
  //   Handling rejections with await.
  //we handle in the form of try ant catch block put the await statement in try block.

  getNum();
}
