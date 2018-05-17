
'use strict';

require("es6-promise");

var promise = new Promise(
    function(fulfill, reject){
        setTimeout(() => {fulfill('FULFILLED!')}, 300);
});

promise.then( result => console.log(result));