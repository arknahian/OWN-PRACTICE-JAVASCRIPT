const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('task one is completed');
    })
}
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        resolve('task two is completed');
    })
}

const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject('task three is not completed');
    })
}


// taskOne().then(res => {
//     console.log(res);
// })
// .then(taskTwo().then(res => {
//     console.log(res)
// }))
// .then(taskThree().then(res => {
//     console.log(res);
// }))


const callAllTask = async () => {
  try {
    const task1 = await taskOne();
    console.log(task1);
    const task2 = await taskTwo();
    console.log(task2)
    const task3 = await taskThree();
    console.log(task3)
  }
  catch(error){
      console.log(error)
  }
}
callAllTask();