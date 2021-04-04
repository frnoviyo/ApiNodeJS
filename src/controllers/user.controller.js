let _userService;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = _userService.get(userId);
    return res.sent(user);
  }

  async getAll(req, res) {
    const users = _userService.getAll();
    return res.sent(users);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updatedUser = _userService.update(userId, body);
    return res.sent(updatedUser);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const deletedUser = await _userService.delete(userId);
    return res.send(deletedUser);
  }
}

module.exports = UserController;