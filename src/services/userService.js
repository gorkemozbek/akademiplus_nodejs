const { User, UserRole, RolePermission, Permission } = require('../models');
const { getMd5Hash } = require('../helpers/crypto');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

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
        await User.create({
            username: user.username,
            email: user.email,
            password: getMd5Hash(user.password)
        });
        return "User added successfully";
    }

    async login(user) {
        const userRec = await User.findOne({
            where: {
                email: user.email,
                password: getMd5Hash(user.password)
            },
            attributes: ['id', 'username']
        });

        if (!userRec) {
            throw new Error('Invalid credentials');
        }

        const userPermissions = await Permission.findAll({
            attributes: ['code'],
            include: [
                {
                    model: RolePermission,
                    required: true,
                    attributes: [],
                    include: [
                        {
                            model: UserRole,
                            required: true,
                            where: { userId: userRec.id },
                            attributes: []
                        }
                    ]
                }
            ]
        })

        let permissions = new Set();
        userPermissions.map((data) => { permissions.add(data.code) });

        const token = jwt.sign({ 
            username: userRec.username,
            email: user.email,
            permissions: Array.from(permissions)
         }, JWT_SECRET, { expiresIn: '24h' });

         return {token};
    }
}

module.exports = UserService;