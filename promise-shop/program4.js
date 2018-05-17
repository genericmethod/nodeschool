
'use strict';

let promise = new Promise(function (fulfill, reject) {
    fulfill("I FIRED"); //once promise is fulfilled, it cannot be rejected.
    reject(new Error("I DID NOT FIRE")); //try reject the promise!
});

function onReject (error) {
    console.log(error.message);
}

promise.then(
    console.log,//onFulfilled // onFulfilled function is called.
    (error) => onReject(error) //onRejected function is not called since promise is already fulfilled
);