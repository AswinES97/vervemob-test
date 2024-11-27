import userModel from "../model/user.model.js";

const allUserData = async (req, res) => {
  try {
    const allData = await userModel.find();
    const parsedData = JSON.parse(JSON.stringify(allData));
    return res.json(parsedData);
  } catch (err) {
    console.log(err);
    throw new Error("Error getting all user data");
  }
};

const updateUserData = async (req, res) => {
  const { _id, name, city, dob, password } = req.body;

  try {
    await userModel.updateOne(
      { _id },
      {
        $set: {
          name,
          password,
          city,
          dob: Date(dob),
        },
      }
    );

    return res.json({ status: "success", message: "data Updated" });
  } catch (err) {
    console.log(err);
    throw new Error("Error updating user data");
  }
};

export { allUserData, updateUserData };
