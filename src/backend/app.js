import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAllProducts } from "./controllers/productController.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get("/products", getAllProducts);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
