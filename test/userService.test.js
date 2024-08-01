const sinon = require('sinon');
const assert = require('assert');
const jwt = require('jsonwebtoken');
process.env.JWT_SECRET = 'testSecret';

const UserService = require('../src/services/userService');
const { User, Permission } = require('../src/models'); // Assuming User and Permission are Sequelize models


describe('login', function() {
  afterEach(function() {
    // After each test, restore the original methods
    sinon.restore();
  });

  it('should return user object for valid credentials', async function() {
    const email = 'testUser';
    const password = 'testPassword';
    const expectedUser = { email: 'testUser', password: 'testPassword' };

    // Mock User.findOne and Permission.findAll methods
    sinon.stub(User, 'findOne').resolves(expectedUser);
    sinon.stub(Permission, 'findAll').resolves([]);

    const result = await new UserService().login( { email, password });
    sinon.assert.calledWith(User.findOne);
    sinon.assert.calledOnce(Permission.findAll);

    const decodedToken = jwt.decode(result.token);
    assert.deepEqual(decodedToken.permissions, []);
  });

  it('should throw error for invalid credentials', async function() {
    const email = 'invalidUser';
    const password = 'invalidPassword';

    // Mock User.findOne method to return null
    sinon.stub(User, 'findOne').resolves(null);

    try {
      await new UserService().login( { email, password });
      assert.fail('Expected error was not thrown');
    } catch (error) {
      assert.equal(error.message, 'Invalid credentials');
    }
  });
});