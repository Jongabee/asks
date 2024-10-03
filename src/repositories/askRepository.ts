import { AppDataSource } from "../config/dataSource";
import { Ask } from "../entities/Ask";

export const AskRepository = AppDataSource.getRepository(Ask);
