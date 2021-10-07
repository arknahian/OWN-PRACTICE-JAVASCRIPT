const recordOne = new Promise((resolve, reject) => {
    resolve('video one recorded');
})
const recordTwo = new Promise(resolve, reject => {
    resolve('video two recorded')
})
const recordThree = new Promise(resolve, reject => {
    resolve("video three recorded");
})

Promise.all([
    recordOne, recordTwo, recordThree
])
.then((message) => {
    console.log(message);
})