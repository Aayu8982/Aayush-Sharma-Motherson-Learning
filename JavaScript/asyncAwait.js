let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 3000);
  });

async function logger() {
  let data = await promise; // pause until fetch returns
  console.log(data);
}
logger();
