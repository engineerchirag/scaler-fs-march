import Show from "../model/show.model.js";

export const addShow = async (req, res) => {
  try {
    const showDetail = new Show(req.body); // theatreId, movieId
    await showDetail.save();
    res.send({
      success: true,
      ...showDetail,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const updateShow = async (req, res) => {
  try {
    const updatedShowDetails = await Show.updateOne(
      { _id: req.params.showId },
      { $set: req.body }
    );

    res.send(updatedShowDetails);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const deleteShow = async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.params.showId);
    res.send({
        success: true,
        message: "Show is deleted"
    })
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const getShowById = async (req, res) => {
  try {
    const showDetail = await Show.find({ _id: req.params.showId }).populate(['theatre', 'movie']);
    res.send(showDetail);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const getShowByFilter = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
