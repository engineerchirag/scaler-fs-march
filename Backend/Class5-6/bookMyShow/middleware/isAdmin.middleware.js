const isAdminMiddleware =  function(req, res, next) {
    try {
        if (req.user.isAdmin) {
            next();
        } else {
            throw new Error("You don't have permission");
        }
    } catch(e) {
        res.status(403).send({
            success: false,
            message: e.message
        })
    }
}

export default isAdminMiddleware;