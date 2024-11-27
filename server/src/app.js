import express from "express";
// import { userRouter } from "./routes/user.routes.js";
import cors from "cors";
import { allUserData, updateUserData } from "./controller/user.controller.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", allUserData);
app.patch("/users", updateUserData)

app.use("/*", (req, res) => {
  res.send("wrong route");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

export default app;
