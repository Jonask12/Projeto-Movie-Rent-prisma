import { movies } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/clients";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";


export class CreateMovieUseCase {
  async execute({ title, duration, release_date }: CreateMovieDTO): Promise<movies> {
    // verificar se o filme já existe
    const movieAlreadyExists = await prisma.movies.findUnique({
      where: {
        title
      }
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie Alread exists!");
    }
    // criar o filme
    const movie = await prisma.movies.create({
      data: {
        title,
        duration,
        release_date
      }
    });
    
    return movie;
  }
}