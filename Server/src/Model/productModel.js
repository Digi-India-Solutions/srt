const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true, // Ensure products have names
    },
    image: {
        type: String,
        // required: true, // Ensure products have an image
    },
    description: {
        type: String,
        // default: "", // Avoid undefined issues
    },
    color: {
        type: String,
        default: "",
    },
    temp: { // Changed "Temp" to lowercase for consistency
        type: String,
        default: "",
    },
    application: {
        type: String,
        default: "",
    },
    use: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "",
    },
    price: { // Changed "Price" to lowercase and Number type
        type: Number,
        // required: true, // Price should always be provided
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category', // Updated to match the Category model
        required: true, // Ensure every product is linked to a category
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
