let url = "https://catfact.ninja/fact";
fetch(url); //return promise. Sp we use promise methods.
fetch(url)
  .then((res) => {
    console.log(res);
    //For reading data we use.
    // res.json(); //This again return promise.
    // console.log(res.json());
    res.json().then((data) => {
      console.log(data);
      console.log(data.fact);
    });
  })
  .catch((err) => {
    console.log("Error-", err);
  });

// Better Way=>
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("Error-", err);
//   });
// We can also use chaining here.

// Using Fetch with async-await.
// let url = "https://catfact.ninja/fact";

// async function getFact() {
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);
//   console.log(res);
// }
