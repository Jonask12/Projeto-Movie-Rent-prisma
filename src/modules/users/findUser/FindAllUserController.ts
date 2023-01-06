import { Request, Response } from "express";
import { FindAllUserUseCase } from "./FindAllUserUseCase";

export class FindAllUserController {
  async handle(req: Request, res: Response) {

    const findAllUserUseCase = new FindAllUserUseCase();
    const user = await findAllUserUseCase.execute();
    return res.status(201).json(user);
  }
}