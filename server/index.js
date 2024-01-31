import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express();
app.use(express.json());


// ROUTES

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(3001, () => {
    console.log(`Server running on port 3001`)
})