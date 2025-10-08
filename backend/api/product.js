const Product = require('../model/Product');
const Farmer = require('../model/Farmer');

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, quantityAvailable, unit, category, farmer, images } = req.body;

        // Check if farmer exists
        const existingFarmer = await Farmer.findById(farmer);
        if (!existingFarmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }

        const product = await Product.create({
            name,
            description,
            price,
            quantityAvailable,
            unit,
            category,
            farmer,
            images,
        });

        // Add product reference to Farmer
        existingFarmer.products.push(product._id);
        await existingFarmer.save();

        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
            .populate('category', 'name')
            .populate('farmer', 'firstName lastName farmName email');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate('category', 'name')
            .populate('farmer', 'firstName lastName farmName email');
        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductsByFarmer = async (req, res) => {
    try {
        const products = await Product.find({ farmer: req.params.farmerId })
            .populate('category', 'name');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.categoryId })
            .populate('farmer', 'firstName lastName farmName');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProduct = async
