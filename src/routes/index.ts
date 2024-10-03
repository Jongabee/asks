import { Router } from "express";
import usersRouter from "./users.Router";
import asksRouter from "./asks.Router";

const router = Router();

router.use("/users", usersRouter);
router.use("/asks", asksRouter);

export default router;
