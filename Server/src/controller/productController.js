const productModel = require("../Model/productModel.js");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const mongoose = require('mongoose')

// ✅ Get All Products
const allproduct = async (req, res) => {
  try {
    const products = await productModel.find().populate("category");
    // console.log(products)
    // if (!products.length) return res.status(404).json({ message: "No products found" });
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// ✅ Add Product
const addproduct = async (req, res) => {
  try {
    let image;
    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: "products",
      });
      fs.unlinkSync(req.files.image.tempFilePath);
      image = result.secure_url;
    }

    const { name, description, color, temp, application, use, type, price, category } = req.body;
    // if (!name || !price || !category) return res.status(400).json({ message: "Missing required fields" });

    const product = await productModel.create({ name, image, description, color, temp, application, use, type, price, category });

    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// ✅ Update Product
const updataproduct = async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = req.body;

    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: "products",
      });
      fs.unlinkSync(req.files.image.tempFilePath);
      updateData.image = result.secure_url;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({ updatedProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Product
const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const ProdbyCategory = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("Category ID:", id);

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    // Fetch products based on category ID
    const data = await productModel.find({ category: new mongoose.Types.ObjectId(id) });

    // console.log("Products:", data);

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No products found for this category" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: error.message });
  }
};

const Sgnproduct = async (req,res)=>{
  try {
    const { id } = req.params;
    const data = await productModel.findById(id);
    if(!data) return res.status(400).json("No data Found");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
module.exports = { allproduct, addproduct, updataproduct, deleteproduct ,ProdbyCategory, Sgnproduct};
