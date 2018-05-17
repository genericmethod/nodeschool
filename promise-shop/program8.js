function attachTitle(name){
    return "DR. " + name;
}

var promise = new Promise(function(fulfill, reject){
    fulfill("MANHATTAN");
});

promise
    .then(attachTitle)
    .then(console.log);

//or else
//Promise.resolve("MANHATTAN")
//    .then(attachTitle)
//    .then(console.log);
