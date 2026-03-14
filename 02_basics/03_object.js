// singleton
// Object.create

// object literals

const Sym = Symbol("BABA YAGA!")


const SupariKillers = {
  name : "John Wick",
  id : 45,
  skills : ["Judo", "Guns Mastery", "Jiu Jitsu"],
  Dialogue: "Yeah"
}

// console.log(SupariKillers.name)
// console.log(SupariKillers[name])
 console.log(SupariKillers.skills)
// console.log(JsUser[Sym])

// SupariKillers.id = 5;
//  Object.freeze(SupariKillers)
// SupariKillers.Dialogue = "Yeah i am thinking i am back!!!"
//  console.log(SupariKillers);

SupariKillers.greeting = function(){
    console.log("Hello Mate");
}
SupariKillers.greetingTwo = function(){
    console.log(`Hello My Mate, ${this.name}`);
}

console.log(SupariKillers.greeting());
console.log(SupariKillers.greetingTwo());