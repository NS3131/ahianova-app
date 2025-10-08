const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    image: {
      type: String,
      required: true,
    },
    images: [{ type: String, trim: true }],

    // 🏷 Category Relationship
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    categoryName: { type: String, trim: true },

    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, min: 0 },
    quantity: { type: Number, required: true, min: 0 },

    unit: {
      type: String,
      required: true,
      enum: ['kg', 'lb', 'ton', 'piece', 'box', 'bag', 'bunch'],
      default: 'kg',
    },
    availability: {
      type: String,
      enum: ['In Stock', 'Seasonal', 'Out of Stock', 'Limited Stock'],
      default: 'In Stock',
    },

    origin: { type: String, required: true, trim: true },
    nutritionalInfo: { type: String, default: '', maxlength: 500 },
    storageInstructions: { type: String, default: '', maxlength: 300 },
    certifications: [{ type: String, trim: true }],

    // 👨‍🌾 Farmer Relationship
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Farmer',
      required: true,
    },
    farmerName: { type: String, required: true, trim: true },

    // 💬 Reviews Relationship
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],

    // 🛒 Order Relationship (which products were ordered)
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],

    harvestDate: { type: Date, required: true },
    expiryDate: { type: Date },

    // Computed Fields
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviewCount: { type: Number, default: 0, min: 0 },

    features: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true, lowercase: true }],

    // Status & Flags
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isOrganic: { type: Boolean, default: false },
    isLocal: { type: Boolean, default: false },

    minOrderQuantity: { type: Number, default: 1, min: 1 },
    maxOrderQuantity: { type: Number, min: 1 },
    shippingWeight: { type: Number, min: 0 },

    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: { type: String, enum: ['cm', 'in', 'm'], default: 'cm' },
    },

    seoTitle: { type: String, trim: true, maxlength: 60 },
    seoDescription: { type: String, trim: true, maxlength: 160 },
    keywords: [{ type: String, trim: true, lowercase: true }],

    viewCount: { type: Number, default: 0, min: 0 },
    salesCount: { type: Number, default: 0, min: 0 },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

//
// 📈 Indexes
//
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ categoryId: 1 });
productSchema.index({ farmerId: 1 });
productSchema.index({ price: 1 });
productSchema.index({ rating: -1 });
productSchema.index({ isActive: 1, isFeatured: 1 });
productSchema.index({ createdAt: -1 });
productSchema.index({ salesCount: -1 });
productSchema.index({ viewCount: -1 });

//
// 🧮 Virtual Fields
//
productSchema.virtual('discountPercentage').get(function () {
  if (this.originalPrice && this.originalPrice > this.price) {
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }
  return 0;
});

productSchema.virtual('stockStatus').get(function () {
  if (this.quantity <= 0) return 'Out of Stock';
  if (this.quantity <= 10) return 'Limited Stock';
  return 'In Stock';
});

//
// ⚙️ Instance Methods
//
productSchema.methods.isAvailable = function () {
  return this.isActive && this.availability !== 'Out of Stock' && this.quantity > 0;
};

productSchema.methods.updateStock = async function (quantity) {
  this.quantity = Math.max(0, this.quantity - quantity);
  if (this.quantity === 0) this.availability = 'Out of Stock';
  else if (this.quantity <= 10) this.availability = 'Limited Stock';
  else this.availability = 'In Stock';
  await this.save();
  return this;
};

productSchema.methods.incrementViewCount = async function () {
  this.viewCount += 1;
  await this.save();
  return this;
};

productSchema.methods.incrementSalesCount = async function (quantity = 1) {
  this.salesCount += quantity;
  await this.save();
  return this;
};

//
// 🧰 Static Methods
//
productSchema.statics.getFeaturedProducts = function (limit = 10) {
  return this.find({
    isActive: true,
    isFeatured: true,
    availability: { $ne: 'Out of Stock' },
  })
    .sort({ rating: -1, createdAt: -1 })
    .limit(limit)
    .populate('farmerId', 'firstName lastName farmName')
    .populate('categoryId', 'name');
};

productSchema.statics.getProductsByCategory = function (categoryId, limit = 20, skip = 0) {
  return this.find({
    categoryId,
    isActive: true,
    availability: { $ne: 'Out of Stock' },
  })
    .sort({ rating: -1, createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('farmerId', 'firstName lastName farmName')
    .populate('categoryId', 'name');
};

productSchema.statics.searchProducts = function (searchTerm, filters = {}) {
  const query = {
    isActive: true,
    $text: { $search: searchTerm },
  };

  if (filters.categoryId) query.categoryId = filters.categoryId;
  if (filters.minPrice || filters.maxPrice) {
    query.price = {};
    if (filters.minPrice) query.price.$gte = filters.minPrice;
    if (filters.maxPrice) query.price.$lte = filters.maxPrice;
  }
  if (filters.availability) query.availability = filters.availability;
  if (filters.isOrganic !== undefined) query.isOrganic = filters.isOrganic;

  return this.find(query)
    .sort({ score: { $meta: 'textScore' }, rating: -1 })
    .populate('farmerId', 'firstName lastName farmName')
    .populate('categoryId', 'name');
};

productSchema.statics.getTopSellingProducts = function (limit = 10) {
  return this.find({
    isActive: true,
    availability: { $ne: 'Out of Stock' },
  })
    .sort({ salesCount: -1, rating: -1 })
    .limit(limit)
    .populate('farmerId', 'firstName lastName farmName')
    .populate('categoryId', 'name');
};

//
// 🪄 Pre-save Hook
//
productSchema.pre('save', function (next) {
  if (!this.seoTitle) {
    this.seoTitle = `${this.name} - ${this.farmerName} | Ahianova`;
  }
  if (!this.seoDescription) {
    this.seoDescription = this.description.substring(0, 157) + '...';
  }
  next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
