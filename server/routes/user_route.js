const router = require("express").Router();
const verify = require("../custom_middleware/jwt_verify");


const user_controller = require("../controllers/user_controller")

// router.get("/mariadb", async (req, res) => {
//  try {
//   const query = "INSERT INTO users (id,surname,other_names,email) VALUES (?,?,?,?)";
//   const response = await pool.query(query, [
//    "ddffw23",
//    "ilechukwu",
//    "joshua",
//    "joshua@gmail.com"
//   ]);
//   console.log(response);
//   res.send(response);
//  } catch (err) {
//   console.log(err);
//  }
// });

//GET ALL USERS WITH ADMIN AUTHENTICATION
router.get("/", verify, user_controller.get_all_users);

//GET SINGLE USER DATA FROM DATABASE
router.get("/info", verify, user_controller.get_user);

//ADD A NEW USER TO DATABASE VIA REGISTRATION
router.post("/", user_controller.add_user);

//DELETE A SINGLE USER FROM DATABASE VIA ID
router.delete("/:ID", user_controller.delete_user);

module.exports = router;
