console.log('welcome');
console.log('bye');
const promise1 = new Promise((resolve, reject) => {
    const userLeft = true;
    const userWatchingCatMeme = true;
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
    const sum = 1+2;
    if (sum != 2) {
        reject("condition is not true");
    }
    else{
        resolve("condition is true");
    }
}) 

promise1.then(message => {
    console.log(message)
})
.catch(error => {
    console.log(error.name + error.message)
})

promise2.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error);
})