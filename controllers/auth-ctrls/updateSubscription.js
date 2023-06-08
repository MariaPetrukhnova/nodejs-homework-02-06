const { User, schemas } = require("../../models/user");
const { HttpError } = require("../../helpers");


const updateSubscription = async (req, res) => {
    const { error } = schemas.updateSubscriptionSchema.validate(req.body);
    if (error) {
        throw HttpError(400, "missing field subscription");
    }
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate(_id, req.body, {new: true});
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.json(result);
}
 
module.exports = updateSubscription;