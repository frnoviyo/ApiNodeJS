const { JwtHelper } = require('../helpers');
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;
    const userExist = await _userService.getUserByUsername(username);
    if (userExist) {
      this.throwError(400, 'User already exists');
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;
    const userExist = await _userService.getUserByUsername(username);
    if (!userExist) {
      this.throwError(404, 'User does not exists');
    }

    const validPassword = userExist.comparePassword(password);
    if (!validPassword) {
      this.throwError(400, 'Invalid password');
    }

    const userToEncode = {
      username: userExist.username,
      id: userExist._id
    };

    const token = JwtHelper.generateToken(userToEncode);

    return { token, user: userExist };
  }

  throwError(statusCode, message) {
    const error = new Error();
    error.status = statusCode;
    error.message = message;
    throw error;
  }
}

module.exports = AuthService;