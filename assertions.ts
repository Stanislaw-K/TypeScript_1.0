// утверждения

const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const valu2 = (<HTMLInputElement>inputElement).value

const getLength = (text: string | null): number => {
    return text!.length
}

getLength('qwerty')
getLength(null) // при компиляции выдаст ошибку потому что тут не может быть null

// ! - означает не null и не undefined