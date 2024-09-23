# asynchronousJavaScript and promises
 Simulating an Online Product Order System


# Exercise: Simulating an Online Product Order System
Question (Attempt Section)
You’ve been tasked to create a basic simulation of an online product order system. The system has three key steps:

Place an order: This will simulate an asynchronous operation where an order is placed.
Process payment: After the order is placed, payment processing happens asynchronously.
Ship the product: After payment is processed, the product is shipped asynchronously.
Each step should take a random amount of time between 1 and 3 seconds to complete. You’ll need to create a function for each step, and all three steps should return a Promise that either resolves successfully or rejects in case of an error.

Steps to follow:

Write three functions: placeOrder(), processPayment(), and shipProduct(). Each of these functions should return a promise that resolves after a random amount of time (between 1 and 3 seconds).
Chain these promises together to simulate the process of placing an order, processing the payment, and shipping the product.
Handle any errors that may occur during any step, ensuring the error is logged appropriately.
Bonus:

Add a success message after all steps have been completed: "Order has been placed, payment processed, and product shipped!".
If any step fails, the process should stop, and a failure message should be logged for the corresponding step.
