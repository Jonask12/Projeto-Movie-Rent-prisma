
import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/clients";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // verificar se o usuário já existe
    const userAlreadExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userAlreadExists) {
      throw new AppError("User already exists!");
    }

    // criar o usuário
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    return user;
  }
}