const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Category name is required'],
            trim: true,
            unique: true,
        },
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Image path is required'],
            trim: true,
        },
        color: {
            type: String,
            required: [true, 'Color is required'],
            trim: true,
            match: [
                /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                'Please provide a valid hex color code',
            ],
        },
        featured: {
            type: Boolean,
            default: false,
        },
        sortOrder: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
        },

        // 🔗 Relationship
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    {
        timestamps: true,
    }
);

// Indexes for faster lookups
categorySchema.index({ slug: 1 });
categorySchema.index({ featured: 1, sortOrder: 1 });

// Automatically generate slug if not provided
categorySchema.pre('save', function (next) {
    if (!this.slug && this.name) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    next();
});

module.exports = mongoose.model('Category', categorySchema);
