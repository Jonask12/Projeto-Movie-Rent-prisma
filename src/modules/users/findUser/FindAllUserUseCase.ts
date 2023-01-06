import { User } from "@prisma/client";
import { prisma } from "../../../prisma/clients";

export class FindAllUserUseCase {
  async execute(): Promise<User[]>{
    const users = await prisma.user.findMany({
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                title: true,
              }
            }
          }
        }
      }
    });
    return users;
  }
}