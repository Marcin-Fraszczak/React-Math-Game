const timeLimit = 10.0
const noOfAnswers = 4
const actions = ['+', '-', '*', '/']
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)
const shuffle = (arr) => {
    let temp
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * arr.length)
        temp = arr[i - 1]
        arr[i - 1] = arr[j]
        arr[j] = temp
        // line below should work, but does not (replaces lines 7, 10-12)
        // [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]
    }
}

export {timeLimit, noOfAnswers, actions, getRandomElement, getRandomNumber, shuffle}