import app from "./server";
import "reflect-metadata";

const PORT: number = Number(process.env.PORT) || 3000;
const initialize = async () => {
  console.log("Initializing server");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

initialize();
