"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
/* ROTE */
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const produtoresRoutes_1 = __importDefault(require("./routes/produtoresRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
/* CONFIG */
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use("/dashboard", dashboardRoutes_1.default); // http://localhost:8000/dashboard
app.use("/produtores", produtoresRoutes_1.default); // http://localhost:8000/produtores
app.use("/users", usersRoutes_1.default); // http://localhost:8000/users
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
