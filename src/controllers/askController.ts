import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getAsksService } from "../services/asksService";

export const getAsks = catchedController(
  async (req: Request, res: Response) => {
    const asks = await getAsksService();
    res.json(asks);
  }
);
