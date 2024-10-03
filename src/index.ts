import { AppDataSource } from "./config/dataSource";
import { PORT } from "./config/envs";
import { preLoadAsk } from "./helpers/preLoadAsk";
import app from "./server";
import "reflect-metadata";

const initialize = async () => {
  console.log("Initializing server");
  await AppDataSource.initialize();
  console.log("Database initilized");
  await preLoadAsk();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

initialize();
