const express = require("express");

const {register, login, getCurrent, logout, updateSubscription} = require("../../controllers/auth-ctrls");

const {validateBody, authentificate} = require("../../middleware");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authentificate, getCurrent);

router.post("/logout", authentificate, logout);

router.patch("/", authentificate, updateSubscription);

module.exports = router;