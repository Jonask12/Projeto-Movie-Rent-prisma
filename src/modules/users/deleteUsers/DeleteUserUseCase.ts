import { prisma } from "../../../prisma/clients";

export class DeleteUserUseCase {
  async execute(id_user: string) {
    return await prisma.user.delete({
      where: {
        id: id_user
      }
    });
   }
  }





// import { prisma } from "../../../prisma/clients";

// export class DeleteUserUseCase {
//   async execute(id_user: string) {
//     return await prisma.user.findMany({
//       where: {
//         id: id_user
//       },
//       select: {
//         movie_rent: true,
//         id: true,
//         name: true,
//         email: true
//       }
//     });
//   }
// }