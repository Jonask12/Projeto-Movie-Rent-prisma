import { Router } from "express";
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieController";
import { GetMoviesByReleaseDateController } from "../modules/movies/getMoviesByReleaseDate/GetMoviesByReleaseDateController";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();

const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

movieRoutes.get("/release", getMoviesByReleaseDateController.handle);

export { movieRoutes };