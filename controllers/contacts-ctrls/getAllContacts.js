const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
    const { _id: owner } = req.user;
    console.log(req.query);
    if (req.query.page && req.query.limit) {
        const { page = 1, limit = 20 } = req.query;
        const skip = (page - 1) * limit;
        const result = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit: Number(limit) }).populate("owner", "name email");
        
        res.status(200).json(result);
    };
    if (req.query.favorite) {
        const { favorite = null } = req.query;
        const result = await Contact.find({ owner, favorite }, "-createdAt -updatedAt").populate("owner", "name email");

        res.status(200).json(result);
    };
    
    const result = await Contact.find({ owner }, "-createdAt -updatedAt").populate("owner", "name email");

    res.status(200).json(result);
};

module.exports = getAllContacts;