// install express
//install mongoose
// instal global nodemon

//  express is based on node, in order to use it we need a node envirnoment
// to create a node envirnoment we need a package.json file
// we use the following command yarn init -y

// we need to  yarn global add nodemon aswell to make it responsive

const connectDb = require("./apis/products/DB/dataBases");
const express = require("express");
const productRoutes = require("./apis/products/routes");

// const products = require("./data");
connectDb();
const app = express();

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol} ://${req.get("host")}${req.originalUrl}`
  );
  next();
});

app.use(express.json());
app.use("/api/products", productRoutes); // will only access productroutes in that path mentioned
// allows our "main":app. to access the body of the request

app.use((req, res, next) => {
  res.status(404).json({ message: "path not found" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "internal server error" });
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
