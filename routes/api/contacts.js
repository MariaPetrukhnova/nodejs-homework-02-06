const express = require('express');

const {getAllContacts, getContactById, addContact, removeContactById, updateContactById, updateFavorite} = require("../../controllers/contacts-ctrls");

const {isValidId, authentificate}  = require("../../middleware");

const router = express.Router();


router.get("/", authentificate, getAllContacts);

router.get("/:id", authentificate,isValidId, getContactById);

router.post("/", authentificate, addContact);

router.delete("/:id", authentificate, isValidId, removeContactById);

router.put("/:id", authentificate, isValidId, updateContactById);

router.patch("/:id/favorite", authentificate, isValidId, updateFavorite);

module.exports = router;
