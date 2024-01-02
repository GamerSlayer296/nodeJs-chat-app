const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, textURL) => {
    return {
        username,
        textURL,
        createdAt: new Date().getTime
    }
}

module.exports = {
    generateMessage, generateLocationMessage
}