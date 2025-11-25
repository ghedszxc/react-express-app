// controllers/userController.js
const User = require("../models/user");

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  //   static async createUser(req, res) {
  //     try {
  //       const { name, email } = req.body;
  //       const newUserId = await User.createUser(name, email);
  //       res.status(201).json({ id: newUserId, message: 'User created successfully' });
  //     } catch (error) {
  //       console.error('Error creating user:', error);
  //       res.status(500).json({ error: 'Internal server error' });
  //     }
  //   }

  // Add more controller methods for update, delete, etc.
}

module.exports = UserController;
