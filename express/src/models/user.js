const pool = require("../database");

class User {
  static async getAllUsers() {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  }

  static async getUserById(id) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0]; // Return the first row if found
  }

  //   static async createUser(name, email) {
  //     const [result] = await pool.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  //     return result.insertId;
  //   }

  // Add more methods for update, delete, etc.
}

module.exports = User;
