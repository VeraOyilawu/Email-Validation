const express = require("express")
const router = express.Router()
const { signUp, signIn, signOut, verifyEmail, resendVerificationEmail,} = require('../controller/userController')
const {verifiedUser} = require("../controller/autorization")


router.route("/").get((req, res) => {
    res.json("Welcome user to my authentication Homepage")
})
router.route("/signUp").post(signUp)
router.route("/verification/:token").get(verifyEmail)
router.route("/resendEmail").post(resendVerificationEmail)
router.route("/sign").post(verifiedUser, signIn)
router.route("/logout").post(signOut)


module.exports = router