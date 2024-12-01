import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "node:path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true, limit: "10mb"}));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import noteRouter from "./routes/note.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", noteRouter);

app.use(express.static(path.join(__dirname, "./dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

export { app };