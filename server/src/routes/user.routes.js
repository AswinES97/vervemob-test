import express from "express";
import { allUserData, updateUserData } from "../controller/user.controller.js";

const userRouter = () => {
  const router = express.Router();

//   router.get("/", allUserData);

  router.route("/")
      .get(allUserData)
      .patch(updateUserData)

  return router;
};

export { userRouter };
