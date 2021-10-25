let products = require("../../data")


exports.productListfetch = (req, res) => {
    return res.json(products);
  }; // this is called a route which is app.somemethod(routepath,some handler);



  exports.createProduct =  (req , res) => { // for creating we use post
    // console.log ("posting", req.body)
    // you need to add a response
    products.push(req.body)
    res.status(201)
    return res.json(req.body)
  }

  exports.deleteProduct =  (req, res) => {
    const productId = req.params.productId
    const product = products.find(product => product.id === +productId)
    if (product){
       products.filter(product => product.id !== +productId)
      res.status(204)
      return res.end()
    } else {
   return res.status(404).json({message : "not found"})
    }}





