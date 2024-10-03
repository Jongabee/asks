import { Router } from "express";
import usersRouter from "./users.Router";
import asksRouter from "./asks.Router";

const router = Router();

router.use("/asks", asksRouter);
router.use("/users", usersRouter);

export default router;
