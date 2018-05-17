
//var promise = new Promise.reject(new Error("Oops!"));

var promise = new Promise(function(fulfill, reject){
    reject(new Error("Oops!"));
});

promise.catch(function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
});

var promise2 = new Promise.resolve("FULFILLED!");

promise2.then(console.log);