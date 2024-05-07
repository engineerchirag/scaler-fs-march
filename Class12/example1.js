const fs = require('fs');

console.log('Start');

const data = fs.readFile('f1.txt', function(err1, data1) {
    // callback will execute
    if (err1) {
        console.log('Error reading file 1')
    } else {
        console.log(data1.toString());
        fs.readFile('f2.txt', function(err2, data2) {
            // callback will execute
            if (err2) {
                console.log('Error reading file 2')
            } else {
                console.log(data2.toString());
                fs.readFile('f3.txt', function(err3, data3) {
                    // callback will execute
                    if (err3) {
                        console.log('Error reading file 3')
                    } else {
                        console.log(data3.toString());
                    }
                });
            }
        });
    }
}); // Sync or Async
console.log(data);

console.log('End');