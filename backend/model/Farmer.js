const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        phoneNumber: { type: String, required: true, trim: true },
        farmName: { type: String, required: true, trim: true },

        farmLocation: {
            coordinates: {
                type: [Number], // [longitude, latitude]
                default: [0, 0],
            },
            address: { type: String, trim: true },
            region: { type: String, trim: true },
        },

        yearsOfExperience: { type: Number, default: 0 },
        specialties: [{ type: String, trim: true }],
        bio: { type: String, trim: true, maxlength: 1000 },

        isVerified: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },

        // ⭐ Rating Stats (auto-updated from Reviews)
        averageRating: { type: Number, default: 0, min: 0, max: 5 },
        totalReviews: { type: Number, default: 0 },

        // 🏦 Bank details
        bankDetails: {
            accountName: { type: String, trim: true },
            accountNumber: { type: String, trim: true },
            bankName: { type: String, trim: true },
        },

        // 🔗 Relationships
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    },
    { timestamps: true }
);

// 📍 GeoJSON index for efficient location queries
farmerSchema.index({ 'farmLocation.coordinates': '2dsphere' });

// 🧠 Virtual for full name
farmerSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// 🔁 Helper method to refresh rating stats
farmerSchema.methods.updateAverageRating = async function () {
    const Review = mongoose.model('Review');

    const stats = await Review.aggregate([
        { $match: { farmer: this._id, 'moderation.status': 'approved' } },
        {
            $group: {
                _id: '$farmer',
                averageRating: { $avg: '$rating' },
                totalReviews: { $sum: 1 },
            },
        },
    ]);

    if (stats.length > 0) {
        this.averageRating = Math.round(stats[0].averageRating * 10) / 10;
        this.totalReviews = stats[0].totalReviews;
    } else {
        this.averageRating = 0;
        this.totalReviews = 0;
    }

    await this.save();
};

// 🪄 Auto-update ratings after a new review is added or modified
farmerSchema.post('save', async function () {
    if (this.isModified('reviews')) {
        await this.updateAverageRating();
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);
