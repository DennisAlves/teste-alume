import express from "express";
import { LaunchersControl } from "../Control/LaunchersControl";


export const UpcomingLaunchesRouter = express.Router();

UpcomingLaunchesRouter.get("/upcoming-launches", new LaunchersControl().launches);