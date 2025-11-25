// controllers/userController.js
const User = require("../models/user");

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: error?.message });
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.getUserById(id);
      user
        ? res.json(user)
        : res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: error?.message });
    }
  }

  static async createUser(req, res) {
    try {
      const { username, password, name } = req.body;
      const newUserId = await User.createUser(username, password, name);
      res.status(201).json({
        id: newUserId,
        message: `${name} is successfully added from user list`,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: error?.message });
    }
  }

  // Add more controller methods for update, delete, etc.
}

module.exports = UserController;
