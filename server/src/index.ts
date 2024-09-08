import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* ROTE */
import dashboardRouters from "./routes/dashboardRoutes";
import produtoresRouters from "./routes/produtoresRoutes";
import userRoutes from "./routes/usersRoutes";
/* CONFIG */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/dashboard", dashboardRouters); // http://localhost:8000/dashboard
app.use("/produtores", produtoresRouters); // http://localhost:8000/produtores
app.use("/users", userRoutes); // http://localhost:8000/users

/*
teste no postman
app.get("/hello", (req, res) => {
    res.send("teste");
});
*/

/* SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
});
