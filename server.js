const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// middlewares
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

// mongodb connection
const connectDB = require("./config/db");
connectDB();

// default route
app.get("/", (req, res) => {
  res.send("api is running...");
});

// user route
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const adminRoutes = require('./routes/adminRoutes')
app.use('/api/admin', adminRoutes)

// user attendace route
const attendaceRoutes = require("./routes/attendaceRoutes");
app.use("/api/attendace", attendaceRoutes);

// user leave route
const leaveRoutes = require("./routes/leaveRoutes");
app.use("/api/leave", leaveRoutes);

// user admission data route
const admissionRoutes = require("./routes/admissionRoutes");
app.use("/api/admission", admissionRoutes);

// user walkin data route
const walkinRoutes = require('./routes/walkinRoutes')
app.use('/api/walkin', walkinRoutes)

// ErrorHandlers
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
app.use(notFound);
app.use(errorHandler);

// listen to ${PORT}
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
