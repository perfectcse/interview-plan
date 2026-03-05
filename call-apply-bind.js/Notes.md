🧠 call, apply, bind – Notes
What problem do they solve?

In JavaScript, this depends on how a function is called.
call, apply, and bind allow us to manually control this.

2️⃣ apply()

apply() works like call() but arguments are passed as array.

3️⃣ bind()

bind() does not execute immediately.
It returns a new function with bound this.

⚡ Difference Between call, apply, bind

| Method | Executes Immediately | Arguments            |
| ------ | -------------------- | -------------------- |
| call   | Yes                  | comma separated      |
| apply  | Yes                  | array                |
| bind   | No                   | returns new function |
