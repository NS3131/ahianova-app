// Import mongoose
const mongoose = require('mongoose');

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD',
    uppercase: true
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'bank_transfer', 'mobile_money', 'crypto', 'cash_on_delivery', 'paypal', 'stripe'],
    required: true
  },
  paymentProvider: {
    type: String,
    enum: ['stripe', 'paypal', 'razorpay', 'flutterwave', 'paystack', 'manual'],
    required: true
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true // Allows null values but ensures uniqueness when present
  },
  providerTransactionId: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded', 'partially_refunded'],
    default: 'pending'
  },
  paymentDate: {
    type: Date
  },
  refundDate: {
    type: Date
  },
  refundAmount: {
    type: Number,
    default: 0,
    min: 0
  },
  refundReason: {
    type: String,
    trim: true
  },
  failureReason: {
    type: String,
    trim: true
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed, // For additional payment provider data
    default: {}
  },
  cardDetails: {
    last4: String,
    brand: String,
    expMonth: Number,
    expYear: Number
  },
  bankDetails: {
    bankName: String,
    accountLast4: String,
    routingNumber: String
  },
  mobileMoneyDetails: {
    provider: String,
    phoneNumber: String,
    transactionId: String
  },
  fees: {
    processingFee: {
      type: Number,
      default: 0
    },
    platformFee: {
      type: Number,
      default: 0
    },
    totalFees: {
      type: Number,
      default: 0
    }
  },
  webhookData: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  isTestPayment: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Indexes for better query performance
paymentSchema.index({ orderId: 1 });
paymentSchema.index({ buyerId: 1, createdAt: -1 });
paymentSchema.index({ transactionId: 1 });
paymentSchema.index({ status: 1 });
paymentSchema.index({ paymentDate: -1 });

// Virtual for net amount (amount minus fees)
paymentSchema.virtual('netAmount').get(function() {
  return this.amount - this.fees.totalFees;
});

// Pre-save middleware to calculate total fees
paymentSchema.pre('save', function(next) {
  this.fees.totalFees = this.fees.processingFee + this.fees.platformFee;
  next();
});

// Method to check if payment is successful
paymentSchema.methods.isSuccessful = function() {
  return this.status === 'completed';
};

// Method to check if payment is refundable
paymentSchema.methods.isRefundable = function() {
  return this.status === 'completed' && !this.refundDate;
};

// Method to get payment method display name
paymentSchema.methods.getPaymentMethodDisplay = function() {
  const methodNames = {
    'credit_card': 'Credit Card',
    'bank_transfer': 'Bank Transfer',
    'mobile_money': 'Mobile Money',
    'crypto': 'Cryptocurrency',
    'cash_on_delivery': 'Cash on Delivery',
    'paypal': 'PayPal',
    'stripe': 'Stripe'
  };
  return methodNames[this.paymentMethod] || this.paymentMethod;
};

// Static method to get payment statistics
paymentSchema.statics.getPaymentStats = async function(startDate, endDate) {
  const matchStage = {};
  if (startDate && endDate) {
    matchStage.createdAt = { $gte: startDate, $lte: endDate };
  }

  return this.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalAmount: { $sum: '$amount' }
      }
    }
  ]);
};

// Create and export the Payment model
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
