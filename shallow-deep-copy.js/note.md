🧠 Shallow vs Deep Copy – Notes
🔹 What is Copy in JavaScript?
When we copy objects/arrays, we either:
Share reference ❌
Create new independent copy ✅

🔵 1️⃣ Shallow Copy
👉 Copies only first level
👉 Nested objects still share reference
.EXAMPLE.
const obj1 = {
  name: "Vishal",
  address: {
    city: "Noida"
  }
};

const obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1.address.city);

🟢 2️⃣ Deep Copy
👉 Copies everything (including nested objects)
👉 No shared reference

