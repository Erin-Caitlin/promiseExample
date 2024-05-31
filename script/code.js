document.querySelector('[division]').addEventListener('click', division)

function division() {
    let fOp = document.querySelector('[firstOp]').value
    let output = document.querySelector('[output]')
    let sOp = document.querySelector('[secOp]').value
    
    let myPromise = new Promise((resolve, reject) => {
        if((fOp < 1 ) || (sOp < 1))
            reject('0 cannot be divded')
        else 
            resolve(fOp / sOp)
    })

    myPromise.then(value => {
        output.textContent = value
        }).catch(value => {
                output.textContent = value
            })
}

