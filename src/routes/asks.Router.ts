import { Request, Response, Router } from "express";
import { getAsks } from "../controllers/askController";

const asksRouter = Router();

asksRouter.get("/", getAsks);

export default asksRouter;
