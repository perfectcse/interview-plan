Debounce means:
👉 “Wait until user stops doing something, then run function”
Example:
Search input
Auto-save
API calls

🔹 What is Throttle?
Throttle means:
👉 “Run function at fixed interval, no matter how many times triggered”

Example:
Scroll events
Resize
Button spam prevention


1️⃣ What is Debouncing?
Debouncing ensures that a function is called only after a delay when user stops triggering events.
Used in:
Search inputs
API optimization

1️⃣ What is Debouncing?

Debouncing ensures that a function is called only after a delay when user stops triggering events.
Used in:
Search inputs
API optimization

3️⃣ Difference between Debounce and Throttle?

| Feature   | Debounce    | Throttle     |
| --------- | ----------- | ------------ |
| Execution | After delay | At intervals |
| Use case  | Search      | Scroll       |
| Calls     | Last call   | First call   |


🚀 Your Understanding Check
Quick question (answer mentally):
👉 If user is typing fast in search → which use?
👉 If user is scrolling continuously → which use?
If you answered:
Search → Debounce ✅
Scroll → Throttle ✅
