import { Router } from "express";
import { DeleteUserController } from "../modules/users/deleteUsers/DeleteUserController";
import { FindAllUserController } from "../modules/users/findUser/FindAllUserController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const deleteUserController  = new DeleteUserController();
const findAllUserController = new FindAllUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);
userRoutes.get("/", findAllUserController.handle);

export { userRoutes };