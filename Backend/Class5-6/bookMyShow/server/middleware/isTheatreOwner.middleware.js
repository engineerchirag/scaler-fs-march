import Theatre from "../model/threatre.model.js";

const isTheatreOwnerMiddleware =  async function(req, res, next) {
    try {
        const theatreDetails = await Theatre.findById(req.body.theatre);
        if (theatreDetails.owner.toString() !== req.user.id) {
            throw new Error(`You aren't the owner of ${theatreDetails.name}`);
        }
        next();
    } catch(e) {
        res.status(403).send({
            success: false,
            message: e.message
        })
    }
}

export default isTheatreOwnerMiddleware;


