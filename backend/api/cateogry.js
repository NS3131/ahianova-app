// routes/categories.js

const express = require('express');
const router = express.Router();
const Category = require('../model/Category');

// ✅ GET all categories
router.get('/', async (req, res) => {
    try {
        const { featured, isActive } = req.query;
        const filter = {};

        if (featured !== undefined) {
            filter.featured = featured === 'true';
        }

        if (isActive !== undefined) {
            filter.isActive = isActive === 'true';
        }

        const categories = await Category.find(filter).sort({ sortOrder: 1, name: 1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch categories',
            error: error.message
        });
    }
});

// ✅ GET featured categories only
router.get('/featured', async (req, res) => {
    try {
        const categories = await Category.find({
            featured: true,
            isActive: true
        }).sort({ sortOrder: 1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch featured categories',
            error: error.message
        });
    }
});

// ✅ GET a single category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching category',
            error: error.message
        });
    }
});

// ✅ GET category by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching category',
            error: error.message
        });
    }
});

// ✅ CREATE a new category
router.post('/', async (req, res) => {
    try {
        const { name, slug, description, image, color, featured, sortOrder } = req.body;

        // Validate required fields
        if (!name || !description || !image || !color) {
            return res.status(400).json({
                message: 'Name, description, image, and color are required'
            });
        }

        // Check if category with same name or slug already exists
        const existingCategory = await Category.findOne({
            $or: [
                { name: name },
                { slug: slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
            ]
        });

        if (existingCategory) {
            return res.status(409).json({
                message: 'Category with this name or slug already exists'
            });
        }

        const category = new Category({
            name,
            slug,
            description,
            image,
            color,
            featured: featured || false,
            sortOrder: sortOrder || 0
        });

        await category.save();

        res.status(201).json({
            message: 'Category created successfully',
            category
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error creating category',
            error: error.message
        });
    }
});

// ✅ UPDATE category by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, slug, description, image, color, featured, sortOrder, isActive } = req.body;

        // Check if updating to an existing slug or name
        if (name || slug) {
            const existingCategory = await Category.findOne({
                _id: { $ne: req.params.id },
                $or: [
                    { name: name },
                    { slug: slug }
                ]
            });

            if (existingCategory) {
                return res.status(409).json({
                    message: 'Another category with this name or slug already exists'
                });
            }
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                ...(name && { name }),
                ...(slug && { slug }),
                ...(description && { description }),
                ...(image && { image }),
                ...(color && { color }),
                ...(featured !== undefined && { featured }),
                ...(sortOrder !== undefined && { sortOrder }),
                ...(isActive !== undefined && { isActive })
            },
            { new: true, runValidators: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({
            message: 'Category updated successfully',
            category: updatedCategory
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error updating category',
            error: error.message
        });
    }
});

// ✅ DELETE category by ID (hard delete)
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({
            message: 'Category deleted successfully',
            category: deletedCategory
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting category',
            error: error.message
        });
    }
});

// ✅ SOFT DELETE category (set isActive to false)
router.patch('/:id/deactivate', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({
            message: 'Category deactivated successfully',
            category
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deactivating category',
            error: error.message
        });
    }
});

// ✅ REACTIVATE category (set isActive to true)
router.patch('/:id/activate', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { isActive: true },
            { new: true }
        );

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({
            message: 'Category activated successfully',
            category
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error activating category',
            error: error.message
        });
    }
});

module.exports = router;