import Joi from 'joi';
import { Schema, model } from "mongoose";

// Define Joi schema for product validation
const productJoiSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required()
});

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    kedar: {
        
    }
}, { timestamps: true });

// Middleware to validate product data before saving
productSchema.pre('save', async function(next) {
    try {
        // Validate the product data against the Joi schema
        await productJoiSchema.validateAsync(this.toObject());
        next();
    } catch (error) {
        next(error);
    }
});

productSchema.method.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
};

const Product = model("Product", productSchema);

export default Product;
