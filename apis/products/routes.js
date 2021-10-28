const express = require("express");

const {
  productListfetch,
  createProduct,
  productUpdate,
  deleteProduct,
} = require("./controllers");
const router = express.Router();

router.get("/", productListfetch);

router.post("/", createProduct);

router.put("/:productId", productUpdate);

router.delete("/:productId", deleteProduct);

module.exports = router;
