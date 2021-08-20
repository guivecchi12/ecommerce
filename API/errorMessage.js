module.exports = errorMessage = (res, status, message) =>{
    return res.status(status).json({ message: message })
}

