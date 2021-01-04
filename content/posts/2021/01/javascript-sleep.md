---
title: JavaScript Sleep Function
date: 2021-01-04 00:00:01
tags: [
  "JavaScript",
  "Coding Byte",
  "Sleep Function",
  "Tutorial"
]
categories: [
  "JavaScript",
  "Coding Byte",
  "Tutorial"
]
desc: JavaScript does not have a built in Sleep function like other programming languages. See how you can implement our your own function.
draft: false
---

There are many use cases for making your application wait a few seconds before doing executing another task. One example is if you are making multiple API calls, you might need to wait between requests to avoid being rate limited. In other programming languages like Python and Go, these languages have built in function for this type of functionality. For example, Python has `time.sleep(4)` and Go has `time.sleep(3 * time.Second)`.

JavaScript does not have a built in function, but we can easily create a function to do this functionality for us by using `setTimeout`. If you are not familiar, `setTimeout` is a built in function that will call a function that is provided as an argument after a specified number of milliseconds.

Example:

```javascript
setTimeout(() => { console.log('Hello'); }, 3000);
```

This will log the message `hello` to the console after `3000` milliseconds.

To implement this in a clean and readable way, we will use a `Promise`.

```javascript
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
```

Now, we can use this function in other `async` functions like so:

```javascript
async function example() {
  console.log('message before sleep');
  await sleep(1000);
  console.log('message after sleep');
}

example();
```

One important thing to remember is that this function does not pause your entire application like it might in other programming languages. Due to how the event loop works in JavaScript, this will only pause the execution of your function.
