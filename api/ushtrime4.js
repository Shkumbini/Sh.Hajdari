

const detyra4 = (cayo) => {
    return new Promise((resolve, reject) => {
        if (cayo == 'healthy') {
            resolve('I have cakes and i happy.');
        } else {
            reject('There is cake and I an sad');
        }
    });
    
}

detyra4('stik')
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(console.log('I still have a party'))







