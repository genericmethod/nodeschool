function parsePromised(){

    return new Promise(function(fulfill, reject){
        try {
            JSON.parse(process.argv[2]);
            fulfill("SUCCESS");
        } catch (e){
            reject(e.message);
        }
    });
}

parsePromised()
    .catch(console.log);
