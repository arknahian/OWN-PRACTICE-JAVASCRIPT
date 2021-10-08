//callback & higher order function
const taskOne = (callback) => {
    console.log('task 1');
    callback();
}


const taskTwo = (callback) => {
    setTimeout(() =>{
        console.log('task 2 is loading....');
        callback();
    }, 1000)
}
const taskThree = () => {
    console.log('task 3');
}
const taskFour = () => {
    console.log('task 4');
}
const taskFive = () => {
    console.log('task 5');
}
const taskSix = () => {
    console.log('task 6');
}

taskOne(() =>{
    taskTwo(() => {
        taskThree();
    })
})

