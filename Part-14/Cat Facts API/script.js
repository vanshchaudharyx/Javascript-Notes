// Axios -> Library to make HTTP requests.

let url = "https://catfact.ninja/fact";

// This is an async function and always returns a Promise.
// So where we receive the output of that function,
// we use await.

async function getFacts() {
  // Why do we need Axios?
  // With fetch(), the response needs to be parsed using .json().
  // Axios directly provides the response data.

  try {
    let res = await axios.get(url);

    console.log(res);
    console.log(res.data);
    // console.log(res.data.fact);

    return res.data.fact;
  } catch (e) {
    console.log("Error-", e);
    return "No fact found";
  }
}

// Display a new fact on the HTML page.

let btn = document.querySelector("button");
let para = document.querySelector("#result");

btn.addEventListener("click", async () => {
  let fact = await getFacts();

  console.log(fact);
  para.innerText = fact;
});