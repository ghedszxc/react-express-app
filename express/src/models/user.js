const pool = require("../database");
const bcrypt = require("bcrypt");
class User {
  static async getAllUsers() {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  }

  static async getUserById(id) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0]; // Return the first row if found
  }

  static async createUser(username, password, name) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const [result] = await pool.execute(
      "INSERT INTO users (username, password, name) VALUES (?, ?, ?)",
      [username, hashedPassword, name]
    );
    return result.insertId;
  }

  // Add more methods for update, delete, etc.
}

module.exports = User;
