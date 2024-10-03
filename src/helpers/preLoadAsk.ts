import { AppDataSource } from "../config/dataSource";
import { Ask } from "../entities/Ask";
import { AskRepository } from "../repositories/askRepository";

interface IAsk {
  id: string;
  ask: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  isCorrect: string;
}

const askToPreLoad: IAsk[] = [
  {
    id: "1",
    ask: "¿Cuantos minutos tiene una hora?",
    option1: "60",
    option2: "80",
    option3: "90",
    option4: "50",
    isCorrect: "60",
  },
];

export const preLoadAsk = async () => {
  const asks = await AskRepository.find();
  if (!asks.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Ask)
      .values(askToPreLoad)
      .execute();
  console.log("Asks preloaded");
};
