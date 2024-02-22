const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name must be provided']
    },
    price: {
        type: String,
        required: [true, 'Product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    },
    category: {
        type: String,
        enum: {
            values: ['office', 'living', 'kitchen', 'bedroom', 'dining', 'kids'],
            message: '{VALUE} is not supported'
        }
    },
    img: {
        type: String
    }
});
module.exports = mongoose.model('Product', productSchema);