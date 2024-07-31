const { User } = require('../models');

class UserService {
    async getAllUsers() {
        const users = await User.findAll(
            {
                attributes: ['username', 'email']
            }
        );

        return users;
    }

    async addUser(user) {
        await User.create(user);
        return "User added successfully";
    }

}

module.exports = UserService;