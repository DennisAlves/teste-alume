import express from "express";
import {launchesControl} from "../Control/LaunchesControl";


export const UpcomingLaunchesRouter = express.Router();

UpcomingLaunchesRouter.get("/upcoming-launches", new launchesControl().launches);