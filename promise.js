let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('success');
    }
    else{
        reject('error');
    }
})
p.then((message) => {
    console.log('this is in the then ' + message);
})
.catch((err) => {
    console.log('this is in the catch ' + err);
})