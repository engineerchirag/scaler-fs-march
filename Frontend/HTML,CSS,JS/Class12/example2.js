// Creating our promise based on result

const boardPromise = new Promise(function(resolve, reject){
    const passingScore = 95;
    const studentScore = 99;

    setTimeout(function() {
        if (studentScore >= passingScore){
            resolve('Yes, completed');
        } else {
            reject('Not completed');
        }
    }, 5000);
});


// Consume

console.log('Start');

const p = boardPromise
    .then(function(data) { 
        // Success 
        console.log('Success: ', data);
        return data;
    })
    .then(function(data) {
        console.log('UpperCase: ', data.toUpperCase());
    })
    .catch(function(err){ 
        // Failure
        console.log('Failure: ', err);
    });

console.log(p);

console.log('End');