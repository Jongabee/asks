import { Request, Response, Router } from "express";
import { getAsks } from "../controllers/askController";

const asksRouter = Router();

asksRouter.get("/", getAsks);

asksRouter.post("/", (req: Request, res: Response) => {
  res.send("Acá se postean las preguntas");
});

asksRouter.put("/", (req: Request, res: Response) => {
  res.send("Aca se editan las preguntas");
});

export default asksRouter;
