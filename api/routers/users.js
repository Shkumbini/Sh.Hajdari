const router = require("express").Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
  login,
} = require("../controllers/users");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUser);
router.post("/", createUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.delete("/", verifyToken, deleteUser);
router.post("/login", login);

module.exports = router;
