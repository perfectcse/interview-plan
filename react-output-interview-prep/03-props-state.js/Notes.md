/*
====================================================
        REACT PROPS, STATE & RE-RENDER
====================================================

1. PROPS
----------------------------------------------------
- Props are data passed from Parent → Child.
- Props are read-only.
- Child should not directly modify props.

Example:

<Child name="Vishal" />

function Child({ name }) {
  return <h1>{name}</h1>;
}


2. STATE
----------------------------------------------------
- State is data managed inside a component.
- State can change using its setter.
- State updates can cause a re-render.

Example:

const [count, setCount] = useState(0);

setCount(1);


3. PROPS vs STATE
----------------------------------------------------
Props:
- Parent provides
- Read-only
- Used for communication

State:
- Component manages
- Can be updated
- Used for changing data


4. PARENT → CHILD
----------------------------------------------------

Parent
  ↓
Props
  ↓
Child

A parent can pass data and functions to a child.


5. CHILD → PARENT
----------------------------------------------------
Child cannot directly modify parent's state.

Instead:
Parent passes a callback → Child calls callback.

Example:

function Parent() {
  const [name, setName] = useState("Vishal");

  return <Child changeName={setName} />;
}


6. RE-RENDER
----------------------------------------------------
A component can re-render when:
- Its state changes
- Its parent re-renders
- Its props change

Important:
A parent re-render normally causes its child to render again.


7. SAME STATE VALUE
----------------------------------------------------
If you do:

setCount(count);

and the value is unchanged, React can
bail out of the update.

Calling a setter does NOT guarantee a visible re-render.


8. REACT.MEMO
----------------------------------------------------
React.memo can skip a child re-render when
its props have not changed.

Example:

const Child = React.memo(function Child({ name }) {
  return <h1>{name}</h1>;
});


9. INTERVIEW MEMORY
----------------------------------------------------

Props → Parent gives
State → Component manages

Parent state changes
        ↓
Parent re-renders
        ↓
Child normally re-renders

React.memo + same props
        ↓
Child can skip re-render

====================================================
*/