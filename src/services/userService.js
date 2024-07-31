const { User } = require('../models');

class UserService {
    getAllUsers() {
        const users = User.findAll(
            {
                attributes: ['username', 'email']
            }
        );

        return users;
    }
}

module.exports = UserService;