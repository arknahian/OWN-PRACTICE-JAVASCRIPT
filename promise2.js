const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    }
    else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching cat meme',
            message: 'wds < cat'
        })
    }
    else {
        callback('Subscribe :)')
    }
}

watchTutorialCallback(message => {
    console.log('success: ' + message);
},
    (error) => {
        console.log(error.name + ' ' + error.message);
    })