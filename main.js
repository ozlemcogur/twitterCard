
const editable = document.querySelector('.editable');
const placeHolder = document.querySelector('.placeholder')
const counter = document.querySelector('.counter')
const button = document.querySelector('.button')
const readOnly = document.querySelector('.readonly')

editable.onfocus = () => {
    placeHolder.style.color = '#c5ccd3';

}

editable.onblur = () => {
    placeHolder.style.color = '#98a5b1';
}



editable.onkeypress = (e) => {
    placeHolder.style.display = 'none'
    validateTweet(e.target);
}

editable.onkeyup = (e) => {
    validateTweet(e.target);

}

const validateTweet = (element) => {
    let text;
    let limit = 10;
    let tweetLenght = element.innerText.length

    if (tweetLenght <= 0) {
        counter.style.display = 'none'
        button.classList.remove('active')
        placeHolder.style.display = 'flex'

    } else {
        counter.style.display = 'block'
        button.classList.add('active')
        placeHolder.style.display = 'none'

    }
    counter.innerText = limit - tweetLenght

    if (tweetLenght > limit) {
        counter.style.color = '#e0245e'
        let overText = element.innerText.substr(limit, tweetLenght)
        overText = ` <span class='overSpan'> ${overText}</span>`
        text = element.innerText.substr(0, limit) + overText
        readOnly.style.zIndex = "1"
        button.classList.remove('active')


    } else {
        counter.style.color = '#333'

    }
    readOnly.innerHTML = text;

}







