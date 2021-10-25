const express = require("express")

const {productListfetch, createProduct, deleteProduct} = require("./controllers")
const router = express.Router();


router.get("/", productListfetch)
  
  router.post("/", createProduct)
  
  router.delete("/:productId", deleteProduct)

  module.exports = router

