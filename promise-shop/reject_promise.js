'use strict';

let error = new Error("REJECTED!");

let promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {reject(error)}, 300);
});

function onReject (error) {
    console.log(error.message);
}

promise.then(
    () => {},//onFulfilled
    (error) => onReject(error) //onRejected
);