const crypto = require('crypto');

const getMd5Hash = (text) => {
    return crypto.createHash('md5').update(text).digest('hex');
}
module.exports = {
    getMd5Hash
}