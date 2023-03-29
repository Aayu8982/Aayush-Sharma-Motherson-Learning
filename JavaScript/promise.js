let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});

promise.then((result) => {
  console.log(result); // "Promise resolved"
});

var promise1 = new Promise(function (resolve, reject) {
  const x = "Aayush";
  const y = "Aayush";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise1
  .then(function () {
    console.log("Success, Your name is Aayush");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });
