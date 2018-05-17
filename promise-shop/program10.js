function alwaysthrows(){
    throw new Error("OH NOES");
}

function iterate(number){
    console.log(number);
    return number+1;
}

Promise.resolve(1)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(alwaysthrows)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .catch(error => console.log(error.message));
