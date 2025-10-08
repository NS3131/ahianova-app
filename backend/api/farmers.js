const express = require('express');
const router = express.Router();
const Farmer = require('../model/Farmer');

/**
 * ✅ Create a new farmer
 * POST /api/farmers
 */
router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      farmName,
      farmLocation,
      yearsOfExperience,
      specialties,
      bio,
      isVerified,
      bankDetails,
      isActive,
    } = req.body;

    // Parse nested JSON fields if sent as strings
    const parsedData = {
      farmLocation: typeof farmLocation === 'string' ? JSON.parse(farmLocation) : farmLocation,
      specialties: typeof specialties === 'string' ? JSON.parse(specialties) : specialties,
      bankDetails: typeof bankDetails === 'string' ? JSON.parse(bankDetails) : bankDetails,
    };

    const farmer = new Farmer({
      firstName,
      lastName,
      email,
      phoneNumber,
      farmName,
      ...parsedData,
      yearsOfExperience,
      bio,
      isVerified,
      isActive,
    });

    await farmer.save();

    res.status(201).json({
      success: true,
      message: '✅ Farmer created successfully',
      data: farmer,
    });
  } catch (error) {
    console.error('❌ Error creating farmer:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating farmer',
      error: error.message,
    });
  }
});

/**
 * ✅ Get all farmers (with optional population)
 * GET /api/farmers?populate=true
 */
router.get('/', async (req, res) => {
  try {
    const { populate } = req.query;
    const query = Farmer.find();

    if (populate === 'true') {
      query.populate('products reviews');
    }

    const farmers = await query.sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: farmers.length,
      data: farmers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch farmers',
      error: error.message,
    });
  }
});

/**
 * ✅ Get a single farmer by ID (with related products & reviews)
 * GET /api/farmers/:id
 */
router.get('/:id', async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id)
      .populate('products')
      .populate({
        path: 'reviews',
        populate: { path: 'buyerId', select: 'firstName lastName email' },
      });

    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: 'Farmer not found',
      });
    }

    res.status(200).json({
      success: true,
      data: farmer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching farmer',
      error: error.message,
    });
  }
});

/**
 * ✅ Update a farmer by ID
 * PUT /api/farmers/:id
 */
router.put('/:id', async (req, res) => {
  try {
    const { farmLocation, specialties, bankDetails } = req.body;

    // Parse potential stringified fields
    const parsedBody = {
      ...req.body,
      farmLocation: typeof farmLocation === 'string' ? JSON.parse(farmLocation) : farmLocation,
      specialties: typeof specialties === 'string' ? JSON.parse(specialties) : specialties,
      bankDetails: typeof bankDetails === 'string' ? JSON.parse(bankDetails) : bankDetails,
    };

    const updatedFarmer = await Farmer.findByIdAndUpdate(
      req.params.id,
      parsedBody,
      { new: true, runValidators: true }
    );

    if (!updatedFarmer) {
      return res.status(404).json({ success: false, message: 'Farmer not found' });
    }

    res.status(200).json({
      success: true,
      message: '✅ Farmer updated successfully',
      data: updatedFarmer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating farmer',
      error: error.message,
    });
  }
});

/**
 * ✅ Delete a farmer by ID
 * DELETE /api/farmers/:id
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedFarmer = await Farmer.findByIdAndDelete(req.params.id);
    if (!deletedFarmer) {
      return res.status(404).json({ success: false, message: 'Farmer not found' });
    }

    res.status(200).json({
      success: true,
      message: '✅ Farmer deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting farmer',
      error: error.message,
    });
  }
});

/**
 * ✅ Get top-rated farmers
 * GET /api/farmers/top
 */
router.get('/top/rated', async (req, res) => {
  try {
    const farmers = await Farmer.find({ isVerified: true })
      .sort({ averageRating: -1, totalReviews: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      data: farmers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching top-rated farmers',
      error: error.message,
    });
  }
});

module.exports = router;
