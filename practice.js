const taskOne = (callback) => {
    console.log('Task one is done');
    callback();
}
const task2 = (callback) => {
    setTimeout(() => {
        console.log('task 2 is loading...');
        callback();
    }, 2000);
}
const task3 = () => {
    console.log('Task three is done');
}
const task4 = () => {
    console.log('Task four is done');
}
taskOne(() => {
    task2(() => {
        task3()
    })
})
