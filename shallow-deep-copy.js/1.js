const obj1 = {
  name: "Vishal",
  address: {
    city: "Noida"
  }
};

const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Delhi";

console.log(obj1.address.city);