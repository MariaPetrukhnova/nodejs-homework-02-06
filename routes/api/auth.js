const express = require("express");

const { register, login, getCurrent, logout, updateSubscription, updateAvatar, verifyEmail, resendVerifyEmail} = require("../../controllers/auth-ctrls");

const { validateBody, authentificate, upload } = require("../../middleware");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), resendVerifyEmail)

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authentificate, getCurrent);

router.post("/logout", authentificate, logout);

router.patch("/", authentificate, updateSubscription);

router.patch("/avatars", authentificate, upload.single("avatar"), updateAvatar);

module.exports = router;