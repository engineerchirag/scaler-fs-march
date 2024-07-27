import Theatre from "../model/threatre.model.js";

// add theatre
export const addTheatre = async(req, res) => {
    try {
        const newTheatre = new Theatre(req.body);
        newTheatre.owner = req.user.id;
        const theatreDetails = await newTheatre.save();
        res.send({
            success: true,
            ...theatreDetails,
        })
    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
};

// get theatre by Id
export const getTheatreById = async(req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
};


// get all theatres 
export const getAllTheatre = async(req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
};


// get theatres by owners

export const getTheatreByOwner = async(req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
};


// update theatre

export const updateTheatre = async(req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
};


// delete theatre

export const deleteTheatre = async(req, res) => {
    try {

    } catch(e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
};