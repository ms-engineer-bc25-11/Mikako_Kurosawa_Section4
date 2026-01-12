
// import { Router } from "express";

// const router = Router();

// router.get("/", (req, res) => {
//   res.send("User router works!");
// });

// export default router;

import { Router } from "express";

const router = Router();

// GET /api/users
router.get("/", (req, res) => {
  res.json({ users: [] });
});

export default router;

