console.log('welcome');
console.log('bye');
const promise1 = new Promise((resolve, reject) => {
    const userLeft = true;
    const userWatchingCatMeme = false;
    if(userLeft) {
        reject({
            name: "user left",
            message: ":("
        })
    }
    else if(userWatchingCatMeme) {
        reject({
            name: 'user watching cat meme',
            message: 'cat meme is the best'
        })
    }
    else{
        resolve('Yay!! Subscribe')
    }
})

const promise2 = new Promise((resolve, reject) => {
    const sum = 1+1;
    if (sum != 2) {
        reject("condition is not true");
    }
    else{
        resolve("condition is true");
    }
}) 

const promise3 = new Promise((resolve, reject) => {
    const coming = true;
    if (coming) {
        resolve('he is coming');
    }
    else{
        reject(new Error('he is not coming'))
    }
})

//classic way 

// promise1.then(message => {
//     console.log(message)
// })
// .catch(error => {
//     console.log(error.name + error.message)
// })

// promise2.then(message => {
//     console.log(message);
// })
// .catch(error => {
//     console.log(error);
// })

// promise3.then(res => {
//     console.log(res);
// })
// .catch(error => {
//     console.log(error.message);
// })


//promise all

// Promise.all([promise1, promise2, promise3])
// .then(res => {
//     console.log(res);
// })
// .catch(error => {
//     console.log(error.message);
// })


//destructure 

Promise.all([promise1, promise2, promise3])
.then(([res1, res2, res3]) => {
    console.log(res1, res3);
})
.catch((err1, err2, err3) => {
    console.log(err1, err2);
})