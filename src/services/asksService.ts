import { Ask } from "../entities/Ask";
import { AskRepository } from "../repositories/askRepository";

export const checkAskExists = async (itemId: string): Promise<boolean> => {
  const item: Ask | null = await AskRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Ask[]> => {
  return await AskRepository.find();
};
