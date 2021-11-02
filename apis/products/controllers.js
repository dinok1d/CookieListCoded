const Product = require("../products/models/Product");
//-----------------------------------------------------------------------------------------------------
// we are creating a function that handles finding a product from the database by its ID
// to make the code shorter and neater.

// param. middleware is a middleware that fetches the products ID

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    console.log("this is product id", product);
    return product;
  } catch (error) {
    next(error);
  }
};

//-----------------------------------------------------------------------------------------------------
// old productlistfetch code
// exports.productListfetch = (req, res) => {
//     return res.json(products);
//   };
// this is called a route which is app.somemethod(routepath,some handler);
//-----------------------------------------------------------------------------------------------------

exports.productListfetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
    //   console.log(error);
    //   return res
    //     .status(404)
    //     .json({ message: "not found, problem with fetching list!" });
    // }
  }
};

//-----------------------------------------------------------------------------------------------------
//this is the old create product
// exports.createProduct = (req, res) => {
//   // for creating we use post
//   // console.log ("posting", req.body)
//   // you need to add a response
//   products.push(req.body);
//   res.status(201);
//   return res.json(req.body);
// };
//-----------------------------------------------------------------------------------------------------

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    // console.log(error);
    // return res
    //   .status(500)
    //   .json({ message: "not found, problem with creating product!" });
  }
};

// updating before param
//---------------------
// exports.productUpdate = async (req, res, next) => {
//   const { productId } = req.params;

//   try {
//     const updatedProduct = await product.findByIdAndUpdate(
//       { _id: productId },
//       req.body,
//       { new: true }
//     );
//     if (updatedProduct) {
//       return res.json(updatedProduct);
//     } else {
//       const ErrorMsg = {
//         status: 404,
//         message: "Product not found!",
//       };
//       next(ErrorMsg);
//     }
//   } catch (error) {
//     const ErrorMsg = {
//       status: 404,
//       message: "Product not found!",
//     };
//     next(ErrorMsg);

//     // return res.status(500).json({ message: error.message });
//   }
// };

exports.productUpdate = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(204).end();
  } catch (error) {
    const ErrorMsg = {
      status: 404,
      message: "Product not found!",
    };
    next(ErrorMsg);

    // return res.status(500).json({ message: error.message });
  }
};

//-----------------------------------------------------------------------------------------------------
// this is the old deleteProduct
// exports.deleteProduct = (req, res) => {
//   const productId = req.params.productId;
//   const product = products.find((product) => product.id === +productId);
//   if (product) {
//     products.filter((product) => product.id !== +productId);
//     res.status(204);
//     return res.end();
//   } else {
//     return res.status(404).json({ message: "not found" });
//   }
// };
//-----------------------------------------------------------------------------------------------------

// older code before param
//------------------------
// exports.deleteProduct = async (req, res, next) => {
//   try {
//     console.log(req.params);
//     const productID = await product.findById(req.params.productId);
//     if (productID) {
//       await productID.remove();
//       return res.status(204).end();
//     } else {
//       const ErrorMsg = {
//         status: 404,
//         message: "Product not found!",
//       };
//       next(ErrorMsg);
//     }
//   } catch (error) {
//     const ErrorMsg = {
//       status: 404,
//       message: "Product not found!",
//     };
//     next(ErrorMsg);
//   }
// };
// // updating and deleting products, you have control

exports.deleteProduct = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
  } catch (error) {
    const ErrorMsg = {
      status: 404,
      message: "Product not found!",
    };
    next(ErrorMsg);
  }
};
