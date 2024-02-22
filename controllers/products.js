const Product = require('../models/product');
const getAllProductsStatic = async (req, res) => {
    const allProduct = await Product.find();
    // console.log(allProduct)
    res.json({ nbHits: allProduct.length, allProduct });
};
const getAllProducts = async (req, res) => {
    try {
        return res.render('index');
    } catch (err) {
        console.log(err);
        return res.json({ msg: err });
    }
};
module.exports = { getAllProductsStatic, getAllProducts };