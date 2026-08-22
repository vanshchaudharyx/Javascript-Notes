//Factory functions==> A function that creates object.
function Personmaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk(name) {
      console.log("Hi my name is ", this.name);
    },
  };
  return person;
}
// This is a way to create multiple persons.
// But this way is not much efficient.
// Each object created its own copy for function.
