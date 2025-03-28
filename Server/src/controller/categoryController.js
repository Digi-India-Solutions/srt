const categoryModel = require("../Model/categoryModel.js");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Get all categories
const allCAtegory = async (req, res) => {
  try {
    const data = await categoryModel.find();
    if (!data) return res.status(400).json("No data Found");
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Add category
const addCategory = async (req, res) => {
  try {
    let image;
    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
          use_filename: true,
          folder: "file-upload",
        }
      );
      fs.unlinkSync(req.files.image.tempFilePath);
      image = result.secure_url;
    }

    const { name } = req.body;
    if (!name) return res.status(400).json("Enter the name of category");

    const data = await categoryModel.create({ name, image });
    if (!data)
      return res.status(400).json("Error occurred while category creation");

    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Update category
const updataCAtegory = async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = {}; // Object to store only the fields that need updating

    // Handle image upload if provided
    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
          use_filename: true,
          folder: "file-upload",
        }
      );
      fs.unlinkSync(req.files.image.tempFilePath);
      updateData.image = result.secure_url; // Add image URL to update data
    }

    // Update name only if provided
    if (req.body.name) {
      updateData.name = req.body.name;
    }

    // console.log(updateData);  Debugging: Check what's being updated

    // Ensure at least one field is being updated
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    // Update the category with only the modified fields
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedCategory) return res.status(404).json({ error: "Category not found" });

    return res.status(200).json({ data: updatedCategory });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


// Delete category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    if (!deletedCategory) return res.status(400).json("Category not found");

    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await categoryModel.findOne({ _id: id });
    // console.log(data);
    if (!data) return res.status(400).json("No data Found");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Export all controller
module.exports = {
  allCAtegory,
  addCategory,
  updataCAtegory,
  deleteCategory,
  single,
};
