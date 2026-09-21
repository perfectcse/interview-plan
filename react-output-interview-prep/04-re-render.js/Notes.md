/*
========================================================
04 — React Re-render, React.memo, useMemo, useCallback
========================================================

1. WHAT IS A RE-RENDER?
-----------------------
A re-render means React calls the component function again
to calculate the updated UI.

Re-render does NOT necessarily mean the DOM changes.

Example:
setCount(count + 1)
→ state changes
→ App re-renders
→ React compares the new UI with the previous UI
→ Only required DOM changes are applied.


2. STATE CHANGE
---------------
When state changes, the component that owns that state
is scheduled to re-render.

Example:

const [count, setCount] = useState(0);

setCount(count + 1);

→ App re-renders.


3. PARENT RE-RENDER
-------------------
Normally, when a parent component re-renders,
its child components also render as part of that
rendering process.

Example:

function Child() {
  console.log("Child");
  return <p>Hello</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child />
    </>
  );
}

Click button:

App
Child

Both render again.


4. React.memo
-------------
React.memo can prevent a child from re-rendering when
its props have not changed.

Example:

const Child = React.memo(function Child({ name }) {
  console.log("Child");
  return <h1>{name}</h1>;
});

If:

<Child name="Vishal" />

and parent re-renders:

→ "Vishal" is unchanged
→ Child can skip re-rendering.


5. PRIMITIVE PROPS
------------------
Primitive values include:

string
number
boolean
null
undefined
bigint
symbol

Example:

<Child name="Vishal" />

If the value remains the same:

React.memo → Child can skip rendering.


6. OBJECT / ARRAY PROPS
-----------------------
Objects and arrays are compared by reference.

Example:

const user = { name: "Vishal" };

Every time App renders:

const user = { name: "Vishal" };

creates a NEW object.

Therefore:

React.memo + new object reference
→ Child re-renders.


7. FUNCTION PROPS
-----------------
Functions are also objects and have reference identity.

Example:

const handleClick = () => {
  console.log("Hello");
};

A new function is created on every render.

Therefore:

React.memo + new function reference
→ Child re-renders.


8. useMemo
----------
useMemo can preserve the result/value between renders
until its dependencies change.

Example:

const user = useMemo(() => ({
  name: "Vishal"
}), []);

Same component instance:

→ same object reference across renders.


IMPORTANT:

useMemo(..., [])
→ value remains memoized until unmount.

useMemo(..., [count])
→ value is recalculated when count changes.


9. useCallback
--------------
useCallback can preserve a function reference between
renders until its dependencies change.

Example:

const handleClick = useCallback(() => {
  console.log("Hello");
}, []);

Same component instance:

→ same function reference.


IMPORTANT:

useCallback(..., [])
→ same function reference across renders.

useCallback(..., [count])
→ new function when count changes.


10. React.memo + useMemo
------------------------
React.memo can skip a child when an object prop keeps
the same reference.

Example:

const user = useMemo(() => ({
  name: "Vishal"
}), []);

<Child user={user} />

Parent re-renders:

→ user reference stays same
→ React.memo can skip Child.


11. React.memo + useCallback
----------------------------
Example:

const handleClick = useCallback(() => {
  console.log("Hello");
}, []);

<Child handleClick={handleClick} />

Parent re-renders:

→ function reference stays same
→ React.memo can skip Child.


12. DEPENDENCY CHANGE
--------------------
This is a common interview trap.

useMemo(..., [count])
useCallback(..., [count])

If count changes:

→ memoized value/function changes
→ new reference
→ React.memo detects changed prop
→ Child re-renders.


13. IMPORTANT COMBINATION
-------------------------

React.memo
    +
stable primitive/object/function prop
    ↓
Child can skip re-render


React.memo
    +
new object/function reference
    ↓
Child re-renders


14. COMMON MISTAKES FROM PRACTICE
---------------------------------

❌ Mistake 1:
Thinking React.memo means Child NEVER renders.

Correct:
React.memo skips Child only when its props are unchanged.

❌ Mistake 2:
Thinking two objects with the same content are the same.

Correct:

{ name: "Vishal" } !== { name: "Vishal" }

They are different object references.

❌ Mistake 3:
Thinking useMemo always prevents re-render.

Correct:
useMemo stabilizes a value/reference.
It does NOT stop the parent from re-rendering.

❌ Mistake 4:
Thinking useCallback always prevents Child re-render.

Correct:
If a dependency changes, a new function is created.

❌ Mistake 5:
Forgetting that dependency arrays control when
useMemo/useCallback produce a new value/reference.


15. INTERVIEW MEMORY TRICK
--------------------------

Primitive unchanged
→ React.memo → SKIP

New object
→ NEW REFERENCE → RENDER

New function
→ NEW REFERENCE → RENDER

useMemo([])
→ SAME VALUE/REFERENCE

useCallback([])
→ SAME FUNCTION REFERENCE

Dependency changes
→ NEW VALUE/FUNCTION


========================================================
END OF 04 — RE-RENDER
========================================================
*/