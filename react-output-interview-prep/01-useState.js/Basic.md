This topic is very important because interviewers ask many tricky questions on useState.
We’ll cover:
Basic state
Multiple setState
Functional updates
Async batching
Objects in state

🧠 useState – Important Rule First
setState is asynchronous and batched

Multiple setState may not update immediately

const [count, setCount] = useState(0);

console.log(count);
0
2️⃣ Single Update
JavaScript
const [count, setCount] = useState(0);

setCount(5);

console.log(count);
Output:
JavaScript
03️⃣ Multiple setState
JavaScript
const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

4️⃣ Functional Update (Important 🔥)
JavaScript
const [count, setCount] = useState(0);

setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
Final state:
JavaScript
3

5️⃣ Tricky Output
JavaScript
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  console.log(count);
}
Output when clicked:
JavaScript
0

6️⃣ Another Tricky One
JavaScript
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);
}
Final state:
JavaScript
1

7️⃣ Functional Version
function handleClick() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}
2

8️⃣ Object State
const [user, setUser] = useState({ name: "Vishal", age: 20 });

setUser({ age: 25 });

console.log(user.name);

undefined

9️⃣ Correct Way (Spread)

setUser(prev => ({
  ...prev,
  age: 25
}));

🔟 useState inside setTimeout
setTimeout(() => {
  setCount(count + 1);
  setCount(count + 1);
}, 1000);

🔟 useState inside setTimeout
setTimeout(() => {
  setCount(count + 1);
  setCount(count + 1);
}, 1000);
2