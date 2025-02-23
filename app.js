import express from 'express';
import {PORT} from "./config/env.js";

// database connection
import connectToDB from "./Database/mongodb.js";

// routes
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

// the "use" keyword
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);


app.get("/", (req, res) => {
    res.send("Welcome to the Subscription Tracker API");
})


app.listen(PORT, async ()=>{
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

    await connectToDB();
})


export default app;