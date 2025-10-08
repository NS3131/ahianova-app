const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: true
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    trim: true,
    maxlength: 100
  },
  comment: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  images: [{
    type: String,
    trim: true
  }],
  helpful: {
    type: Number,
    default: 0
  },
  helpfulUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isVerifiedPurchase: {
    type: Boolean,
    default: false
  },
  farmerResponse: {
    comment: {
      type: String,
      trim: true,
      maxlength: 500
    },
    respondedAt: Date
  },
  moderation: {
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'flagged'],
      default: 'approved'
    },
    moderatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    moderatedAt: Date
  },
  report: {
    isReported: { type: Boolean, default: false },
    reason: {
      type: String,
      enum: ['inappropriate', 'spam', 'fake', 'offensive', 'other']
    },
    details: {
      type: String,
      trim: true,
      maxlength: 200
    }
  }
}, { timestamps: true });

// Compound index — 1 review per buyer per farmer
reviewSchema.index({ buyer: 1, farmer: 1 }, { unique: true });

// Virtual field for rating text
reviewSchema.virtual('ratingText').get(function() {
  const map = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };
  return map[this.rating] || 'Unknown';
});

// Methods
reviewSchema.methods.canMarkHelpful = function(userId) {
  return !this.helpfulUsers.includes(userId) && this.buyer.toString() !== userId.toString();
};

reviewSchema.methods.markHelpful = function(userId) {
  if (this.canMarkHelpful(userId)) {
    this.helpfulUsers.push(userId);
    this.helpful += 1;
    return true;
  }
  return false;
};

reviewSchema.methods.unmarkHelpful = function(userId) {
  const index = this.helpfulUsers.indexOf(userId);
  if (index > -1) {
    this.helpfulUsers.splice(index, 1);
    this.helpful = Math.max(0, this.helpful - 1);
    return true;
  }
  return false;
};

// Static methods for stats
reviewSchema.statics.getFarmerRatingStats = async function(farmerId) {
  const stats = await this.aggregate([
    { $match: { farmer: new mongoose.Types.ObjectId(farmerId), 'moderation.status': 'approved' } },
    {
      $group: {
        _id: null,
        totalReviews: { $sum: 1 },
        averageRating: { $avg: '$rating' }
      }
    }
  ]);

  if (stats.length === 0) return { totalReviews: 0, averageRating: 0 };

  return {
    totalReviews: stats[0].totalReviews,
    averageRating: Math.round(stats[0].averageRating * 10) / 10
  };
};

// Post-save hook: update farmer rating
reviewSchema.post('save', async function() {
  if (this.moderation.status === 'approved') {
    const Farmer = mongoose.model('Farmer');
    const stats = await this.constructor.getFarmerRatingStats(this.farmer);
    await Farmer.findByIdAndUpdate(this.farmer, { rating: stats.averageRating });
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
