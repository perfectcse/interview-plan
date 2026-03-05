function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Vishal" };

greet.apply(user, ["Noida"]);