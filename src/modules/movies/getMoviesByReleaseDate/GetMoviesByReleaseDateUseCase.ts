import { movies } from "@prisma/client";
import { prisma } from "../../../prisma/clients";


export class GetMoviesByReleaseDateUseCase {
  async execute(): Promise<movies[]> {

    const movies = await prisma.movies.findMany({
      orderBy: {
        release_date: "desc"
      },
      include: {
        movie_rent: {
          select: {
            user: {
              select: {
                name: true,
                email: true
              }
            }
          }
        }
      }
    });
    return movies;
  }
}