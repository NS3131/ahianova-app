// Import mongoose and bcrypt
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, unique: true, trim: true, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, trim: true },
  companyName: { type: String, trim: true },
  country: { type: String, trim: true },
  role: {
    type: String,
    enum: ['buyer', 'farmer', 'admin'],
    default: 'buyer'
  },
  isVerified: { type: Boolean, default: true },
  // address: {
  //   street: { type: String, trim: true },
  //   city: { type: String, trim: true },
  //   state: { type: String, trim: true },
  //   zipCode: { type: String, trim: true },
  //   country: { type: String, trim: true }
  // },
  // isActive: { type: Boolean, default: true },
  lastLogin: { type: Date }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

// Create and export model
const User = mongoose.model('User', userSchema);
module.exports = User;
