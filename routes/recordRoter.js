const express = require("express")
const router = express.Router()
const userRecords = require("../controllers/recordController")
const {isLoggedIn} = require("../middlewares/authMiddleware")
const {verifiedUser} = require("../controller/autorization")

router.route("/records").post(isLoggedIn,verifiedUser, userRecords.createRecord)
router.route("/Allrecords").get(isLoggedIn, verifiedUser, userRecords.readRecords)
router.route("/usersRecords").get(isLoggedIn, verifiedUser, userRecords.readAllRecordsOfUser)
router.route("/record/:id").get(isLoggedIn, verifiedUser, userRecords.readRecord)
router.route("/updateRecord/:id").patch(isLoggedIn, verifiedUser, userRecords.updateRecord)
router.route("/deleteRecord/:id").delete(isLoggedIn, verifiedUser, userRecords.deleteRecord)

module.exports = router