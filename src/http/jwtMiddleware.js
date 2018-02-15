const jwtMiddleware = () => {
    return (req, res, next) => {
        console.log(req.href())
        next()
    }
}

module.exports = jwtMiddleware