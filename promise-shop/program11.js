function all(firstPromise, secondPromise){

    return new Promise(function(fulfill, reject) {
        let out = [];
        let counter = [];

        firstPromise.then(
            function(val){
                out[0] = val;
                counter++;
                if (counter >= 2) {
                    fulfill(out);
                }
            });

        secondPromise.then(
            function(val){
                out[1] = val;
                counter++;
                if (counter >= 2) {
                    fulfill(out);
                }
        });

    });

}

all(getPromise1(), getPromise2())
    .then(console.log);