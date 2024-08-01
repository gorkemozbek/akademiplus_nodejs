const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env;

const auth = (permissionCode) => {
    return (req, res, next) => {
        try {
            const token = req.header('Authorization').split(' ')[1]
            jwt.verify(token, JWT_SECRET)
    
            const permissions = jwt.decode(token).permissions;

            if (!permissions.includes(permissionCode)) {
                throw new Error('Unauthorized')
            }

            next()
        } catch (error) {
            res.status(401).send('Unauthorized')
        }
    }
}

module.exports = auth;