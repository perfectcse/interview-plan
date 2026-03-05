function call() {
  console.log("Hello " + this.name);
}

const user = { name: "Vishal" };

call.call(user);