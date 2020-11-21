import express from "express";
import Routes from "./routes";
const app = express();
app.use("/api",Routes);
export { app as default };
