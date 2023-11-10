const { PrismaClient } = require("@prisma/client");
const db = require("../database");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      include: {
        Post: true,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
  // db.query("SELECT * FROM users", (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send("Internal server error!");
  //   }
  //   res.json(result);
  // });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, city, title, body } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        city,
        Post: {
          create: {
            title,
            body,
          },
        },
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error!");
  }

  // db.query(
  //   "INSERT INTO users (full_name, email, role, password) values (?,?,?,?)",
  //   [full_name, email, role, password],
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).send("Internal server error!");
  //     }
  //     res.status(201).send("User created successfully!");
  //   }
  // );
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { full_name, email } = req.body;
  db.query(
    "UPDATE users SET full_name = ?, email = ? where id = ?",
    [full_name, email, userId],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal server error!");
      }
      if (result.affectedRows === 0) {
        return res.status(404).send("User not found.");
      }
      res.send("User updated successfully!");
    }
  );
};

const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error!");
  }

  // db.query("DELETE FROM books WHERE id = ?", [userId], (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send("Internal Server Error");
  //   }
  //   if (result.affectedRows === 0) {
  //     return res.status(404).send("User not found.");
  //   }
  //   res.send("User deleted successfully!");
  // });
};

const getUser = (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal server code");
      }

      if (result.length == 0) {
        return res
          .status(404)
          .send(`User with id: ${req.params.id} is not found!`);
      }

      res.json(result);
    }
  );
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (user) {
      const token = await jwt.sign(user, process.env.SECRET_TOKEN, {
        expiresIn: "5m",
      });
      res.json(token);
    } else {
      res.status(404).send("Please check your credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error!");
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  login,
};
