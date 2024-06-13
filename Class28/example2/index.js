// Polyfill of Promise.all

// Takes array of promise & return array of result
// It return on either all success or failure of anyone of promise

Promise.all = function(promises) {
    const result = [];

    // [f1 (100), f2(50), f3(80)] // [r2, r3, r1]
    const newPromise = new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((data) => {
                result[idx] = data;
                if (promises.length === result.length) {
                    resolve(result);
                }
            }).catch((e) => {
                reject(e);
            })
        })
    })

    return newPromise;
    
}

Promise.all([]).then(() => {});


// Polyfill for Promise.race

Promise.race = function(promises) {
    // [f1 (100), f2(f50), f3(80)] // r2-f
    const newPromise = new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((data) => {
               resolve(data);
            }).catch((e) => {
                reject(e);
            })
        })
    })

    return newPromise;
}

// Polyfill for Promise.any


Promise.any = function(promises) {
    const rejections = [];
    // [f1 (s100), f2(f50), f3(s80)] // f3(s80)
    // [f1 (f100), f2(f50), f3(f80)] // error
    const newPromise = new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((data) => {
               resolve(data);
            }).catch((e) => {
                rejections[idx] = e;
                if(promises.length === rejections.length) {
                    reject(e);
                }
            })
        })
    })

    return newPromise;
}