const ProductService = require('../services/product.service');

const getProducts = async (req, res) => {
  const { userId, id, alias } = req.query;

  const response = await ProductService.getProducts({ 
    userId,
    id,
    alias,
  });

  return res.json(response);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const response = await ProductService.getProductById(id);

  return res.json(response);
};

const deleteProduct = async (req, res) => {
  const { id }  = req.params;

  const response = await ProductService.deleteProduct(id);

  return res.json(response);
}

module.exports = {
  deleteProduct,
  getProductById,
  getProducts
}