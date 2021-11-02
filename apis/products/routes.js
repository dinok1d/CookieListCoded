const express = require("express");

const {
  productListfetch,
  createProduct,
  productUpdate,
  deleteProduct,
  fetchProduct,
} = require("./controllers");
const router = express.Router();

// the idea is we want this param to active
//  the route parameter is mentioned. such as "/:productId" In update/delete/detail
router.param("productId", async (req, res, next, productId) => {
  console.log(productId);
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const error = new Error("Product Not Found");
    error.status = 404;
    next(error);
  }
});

router.get("/", productListfetch);

router.post("/", createProduct);

router.get("/:productId", fetchProduct);

router.put("/:productId", productUpdate);

router.delete("/:productId", deleteProduct);

module.exports = router;
