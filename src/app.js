import express from "express";
import productRoutes from "./routes/product.routes.js";
import brandRoutes from "./routes/brand.routes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/products", productRoutes);

app.use("/brands", brandRoutes);

export default app;
