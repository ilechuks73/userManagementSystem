const express = require("express");
const router = express.Router();
const verify = require("../custom_middleware/jwt_verify");
const admin_controller = require("../controllers/admin_controller")



router.get("/", verify, admin_controller.get_all_admins);

router.get("/info", verify, admin_controller.get_admin);

router.post("/",verify, admin_controller.add_admin);

router.delete("/:ID", verify, admin_controller.delete_admin)
  
module.exports = router;
  