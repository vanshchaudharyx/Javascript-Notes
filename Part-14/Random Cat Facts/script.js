// Axios->Library to make HTTP request.
let url = "https://catfact.ninja/fact";
//This is a async function and always return promise.
// So where we recieve the output of that function at that point we need to use await.
async function getFacts() {
  //Why we need axios?
  //In fetch when we get response it is in readable stream but not exact JSON data so we have to parse it.
  //In axios we get direct response we want.
  try {
    let res = await axios.get(url); //This return promise then we use different methods
    console.log(res);
    console.log(res.data);
    // console.log(res.data.fact);
    return res.data.fact;
  } catch (e) {
    console.log("Error-", e);
    return "No fact found";
  }
}
//We want new fact is visible on our html page.
let btn = document.querySelector("button");
let para = document.querySelector("#result");
btn.addEventListener("click", async () => {
  //   console.log("Button was clicked ");
  let fact = await getFacts();
  console.log(fact);
  para.innerText=fact;
});
