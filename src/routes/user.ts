// import { Router } from "express";

// const router = Router();

// router.get("/", (req, res) => {
//   res.send("User router works!");
// });

// export default router;

import { Router } from 'express';
import { getUser } from "../controllers/userController";

const router = Router();// controllerを使ってレスポンスを作る

// GET /api/users
router.get('/', (_req, res) => {
  const user = getUser()
  // res.json({ users: [] });
  res.status(200).json(user)
});

export default router;