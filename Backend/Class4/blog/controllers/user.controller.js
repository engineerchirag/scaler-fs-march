import User from "../model/user.model.js";

export const getUserById = async (req, res) => {
  const userId = req.params.userId;
  const UserDetail = await User.findById(userId);
  res.status(200).send(UserDetail);
};

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUserData = await User.create(userData);
    res.status(200).send(newUserData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateUser = async (req, res) => {
  const userData = req.body;
  const userId = req.params.userId;
  const updatedData = await User.updateOne(
    { _id: userId },
    {
      $set: userData,
    }
  );
  res.status(200).send(updatedData);
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const deletedData = await User.findByIdAndDelete(userId);
  res.status(200).send(deletedData);
};
