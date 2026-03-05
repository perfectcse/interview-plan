function greet() {
  console.log("Hello " + this.name);
}

const user = { name: "Vishal" };

const fn = greet.bind(user);

fn();