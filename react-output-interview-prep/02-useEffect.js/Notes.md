useEffect(() => {
  // side effect
}, [dependencies]);

⚡ 3 Types of useEffect

1️⃣ No dependency
useEffect(() => {
  console.log("Run");
});

2️⃣ Empty dependency []
useEffect(() => {
  console.log("Run once");
}, []);

3️⃣ With dependency
useEffect(() => {
  console.log("Run when count changes");
}, [count]);

1️⃣ Basic Execution

console.log("A");

useEffect(() => {
  console.log("B");
}, []);

console.log("C");
A,C,B

👉 useEffect runs after render

2️⃣ Without Dependency
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Effect");
});

setCount(1);
Output:
Effect (multiple times)


3️⃣ With Dependency

const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Effect");
}, [count]);


4️⃣ Infinite Loop (🔥 Important)

const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
});

infinitte loop

5️⃣ Fix Infinite Loop

useEffect(() => {
  setCount(1);
}, []);


6️⃣ Cleanup Function
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Cleanup");
  };
}, []);

Mounted cleanup (on unmount)

7️⃣ Tricky Order

useEffect(() => {
  console.log("Effect 1");
}, []);

useEffect(() => {
  console.log("Effect 2");
}, []);

Effect 1
Effect 2

8️⃣ Dependency Change

const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Effect", count);
}, [count]);

setCount(1);
setCount(2);

9️⃣ Function Dependency Trap

function App() {
  const [count, setCount] = useState(0);

  const fn = () => {
    console.log("Hi");
  };

  useEffect(() => {
    console.log("Effect");
  }, [fn]);
}

Effect (every render)

🔟 Fix Function Dependency

const fn = useCallback(() => {
  console.log("Hi");
}, []);


🎯 Expected Interview Questions

1️⃣ When does useEffect run?
useEffect runs after render.

2️⃣ Difference between [] and no dependency?

Case
Behavior
No dependency
Runs every render
[]
Runs once
[value]
Runs when value changes

3️⃣ What is cleanup function?

A function returned from useEffect that runs:
before next effect
on unmount
Example:
JavaScript
return () => { cleanup }

4️⃣ Why infinite loop happens?

Because:
JavaScript
Effect → setState → re-render → effect again

5️⃣ How to avoid infinite loop?

Use dependency array properly:
JavaScript
useEffect(() => {}, []);

6️⃣ Why function in dependency causes re-render?
Because function is recreated on every render → new reference

🧠 Memory Trick
JavaScript

No [] → every time
[] → once
[value] → when value changes

⭐ Interview Tip
When answering useEffect:
Say:
1️⃣ Runs after render
2️⃣ Dependency controls execution
3️⃣ Cleanup prevents memory leaks
4️⃣ Infinite loop explanation
This shows strong React understanding 🔥
