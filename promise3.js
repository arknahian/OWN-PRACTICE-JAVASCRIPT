const userLeft = false;
const watchingCatMeme = true;


function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        }
        else if (watchingCatMeme) {
            reject({
                name : 'user watching cat meme',
                message : 'wds < cat'
            })
        }
        else{
            resolve({
                name: 'User watching tutorial',
                message : 'Subscribe'
            })
        }
    })
}
watchTutorialPromise()
.then(message => {
    console.log('success', message);
})
.catch(error => {
    console.log(error.name + ' ' + error.message);
})