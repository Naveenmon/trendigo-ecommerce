const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");


const vercelUrl = process.env.VITE_REACT_APP_FRONTEND_URL
const allowedOrigins = [
  `${vercelUrl}`, `https://trendigo-ecommerce-new.vercel.app`,
]

const dotenv = require('dotenv');
const path = require('path');

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

dotenv.config({path: path.join(__dirname,'.env')})

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASS



mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.kfehf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  
const app = express();

app.use(
  cors({
    origin:  (origin, callback)=>{
      if(!origin || allowedOrigins.includes(origin)){
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
    optionsSuccessStatus:204
  })
);

app.use((req, res, next) => {
  console.log('Request Origin:', req.headers.origin);
  next();
});


app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

const PORT = process.env.VITE_REACT_APP_BACKEND_URL || 5000;
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
