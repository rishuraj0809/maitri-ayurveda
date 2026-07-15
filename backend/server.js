import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Maitri Ayurveda Backend is Running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));

