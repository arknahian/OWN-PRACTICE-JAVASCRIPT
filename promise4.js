const pass = true;
const avg = false;
const failed = true;

function resultOfExam() {
    return new Promise((resolve, reject) => {
        if (failed) {
            reject({
                name: 'oo oow!',
                message: 'One more try...',
            })
        }
        else if (avg) {
            reject({
                name : ':)',
                message: 'Next Time Baby'
            })
        }
        else{
            resolve('congratulation')
        }
    })
}

resultOfExam()
.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error.name + error.message);
})