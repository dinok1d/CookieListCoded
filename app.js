//  express is based on node, in order to use it we need a node envirnoment
// to create a node envirnoment we need a package.json file
// we use the following command yarn init -y

// we need to  yarn global add nodemon aswell to make it responsive


const express = require("express");
const productRoutes = require("./apis/products/routes")
// const products = require("./data");
const app = express();
app.use(express.json())
app.use("/api/products", productRoutes) // will only access productroutes in that path mentioned
// allows our "main":app. to access the body of the request

app.listen(8000, () => {
  console.log("The application is running on localhost:8000")}
)