const timeLimit = 10.0
const noOfAnswers = 4
const actions = ['+', '-', '*', '/']
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)

const shuffle = (arr) => {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * arr.length);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]
    }
}

export {timeLimit, noOfAnswers, actions, getRandomElement, getRandomNumber, shuffle}