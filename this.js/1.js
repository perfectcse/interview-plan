const obj = {
  name: "Vishal",
  getName: function () {
    return this.name;
  },
};

const fn = obj.getName;
console.log(fn());