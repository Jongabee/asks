import { Request, Response, Router } from "express";

const usersRouter = Router();

usersRouter.post("/login");
usersRouter.post("/register");
usersRouter.get("/", (req: Request, res: Response) => {
  res.send("¡Hola mundo!");
});

export default usersRouter;
