// Simulated asynchronous functions
function fetchUserData(callback) {
    setTimeout(() => {
        const userData = { name: "John Doe", age: 30 };
        callback(null, userData);
    }, 1000);
}

function processUserData(userData, callback) {
    setTimeout(() => {
        userData.processed = true;
        callback(null, userData);
    }, 1000);
}

function saveUserData(userData, callback) {
    setTimeout(() => {
        console.log("User data saved:", userData);
        callback(null, "Save successful");
    }, 1000);
}

function handleError(error) {
    console.error("An error occurred:", error);
}

// Using callbacks to handle data processing
fetchUserData((error, userData) => {
    if (error) {
        return handleError(error);
    }
    processUserData(userData, (error, processedData) => {
        if (error) {
            return handleError(error);
        }
        saveUserData(processedData, (error, result) => {
            if (error) {
                return handleError(error);
            }
            console.log(result);
        });
    });
});




    // // Your code goes here
    // function placeOrder(){
    //     let promiseToOrder = new Promise ((resolve,reject)=>{
    //         console.log("Placing order for Order 101");
    //             //This will simulate an asynchronous operation where an order is placed.
    //         setTimeout(()=>{
    //             let x = Math.floor((Math.random() * 10)+1)
    //              if (x >= 5){
    //                 resolve("Order 101 has been placed successfully")
    //              }else{
    //                 reject("Failed to place order")
    //                     // Reload the page after 8 seconds (8000 milliseconds)
    //              }
    //         },3000);
    //     });
    
    //     promiseToOrder
    //         .then((value) => {
    //             console.log(value); // Runs if promise is resolved
    //             processPayment();
    //         })
    //         .catch(handleError);

    // };
    
    
    // function processPayment(){
    //     let promiseToPay = new Promise ((resolve,reject)=>{
    //         console.log("Processing payment for Order 101");
    //             //This will simulate an asynchronous operation where an order is placed.
    //         setTimeout(()=>{
    //             let x = Math.floor((Math.random() * 10)+1)
    //              if (x >= 5){
    //                 resolve("Payment for order 101 has been processed successfully")
    //              }else{
    //                 reject("Failed to process payment")
    //              }
    //         },2000);
    //     });
    
    //     promiseToPay
    //         .then((value) => {
    //             console.log(value); // Runs if promise is resolved
    //             shipProduct();
    //         })
    //         .catch(handleError);
    
    
    // };
    
    // function shipProduct(){
    //     console.log("Preparing to Ship order 101")
    //     let promiseToShip = new Promise ((resolve,reject)=>{
    //             //This will simulate an asynchronous operation where an order is placed.
    //         setTimeout(()=>{
    //             let x = Math.floor((Math.random() * 10)+1)
    //              if (x >= 5){
    //                 resolve("Order has been shipped successfully")
    //              }else{
    //                 reject("Order shipment failed")
    //              }
    //         },1000);
    //     });
    
    //     promiseToShip
    //         .then((value) => {
    //             console.log(value); // Runs if promise is resolved
    //             orderSystemSuccess();
    //         })
    //        .catch(handleError);
    
    // };

    // function orderSystemSuccess(){
    //     setTimeout(function() {
    //         console.log("Order has been placed, payment processed, and product shipped!")
    //     }, 2000)
    // }

    // function handleError(error) {
    //     console.log(error);
    //     setTimeout(() => {
    //         alert("Something went wrong! Please try again.");
    //         // Optionally, provide a retry button instead of reloading automatically
    //     }, 1000);
    // }

    // placeOrder();











