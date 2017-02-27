//traditional callback method

function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Vancouver', function(err, temp) {
    if(err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});


//Promise method

function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

//these callbacks, will only happen once resolve or reject have been called
getTempPromise('Vancouver').then(function (temp) {
    console.log('promise success', temp);
}, function (err){
    console.log('promise error', err);
})

//challenge

function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(typeof a === 'number' && typeof b === 'number') {
                 resolve(a + b);
            } else {
                reject('One of these is not a number!')
            }
           
        }, 1000);
    });
}

addPromise(6, 8).then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});

addPromise(6, 'help').then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});