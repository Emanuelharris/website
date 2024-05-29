require('dotenv').config();
const mongoose = require('mongoose');
const { Brand } = require('./model/Brand');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define an array of brands to seed
const brandsToSeed = [
  // Devices
  { label: 'Apple', value: 'apple', category: 'devices' },
  { label: 'Samsung', value: 'samsung', category: 'devices' },
  { label: 'Sony', value: 'sony', category: 'devices' },
  { label: 'LG', value: 'lg', category: 'devices' },
  { label: 'Microsoft', value: 'microsoft', category: 'devices' },
  { label: 'Dell', value: 'dell', category: 'devices' },
  { label: 'HP', value: 'hp', category: 'devices' },
  { label: 'Lenovo', value: 'lenovo', category: 'devices' },
  { label: 'Acer', value: 'acer', category: 'devices' },
  { label: 'Asus', value: 'asus', category: 'devices' },
  { label: 'Google', value: 'google', category: 'devices' },
  { label: 'Huawei', value: 'huawei', category: 'devices' },
  { label: 'Xiaomi', value: 'xiaomi', category: 'devices' },
  { label: 'OnePlus', value: 'oneplus', category: 'devices' },
  { label: 'Motorola', value: 'motorola', category: 'devices' },
  { label: 'Nokia', value: 'nokia', category: 'devices' },
  
  // Gadgets
  { label: 'Amazon', value: 'amazon', category: 'gadgets' },
  { label: 'Fitbit', value: 'fitbit', category: 'gadgets' },
  { label: 'Garmin', value: 'garmin', category: 'gadgets' },
  { label: 'GoPro', value: 'gopro', category: 'gadgets' },
  { label: 'Roku', value: 'roku', category: 'gadgets' },
  { label: 'Sonos', value: 'sonos', category: 'gadgets' },
  { label: 'JBL', value: 'jbl', category: 'gadgets' },
  { label: 'Bose', value: 'bose', category: 'gadgets' },
  { label: 'Sennheiser', value: 'sennheiser', category: 'gadgets' },
  { label: 'Beats', value: 'beats', category: 'gadgets' },
  { label: 'Anker', value: 'anker', category: 'gadgets' },
  
  // Sounds
  { label: 'Sony', value: 'sony', category: 'sounds' },
  { label: 'Bose', value: 'bose', category: 'sounds' },
  { label: 'Sennheiser', value: 'sennheiser', category: 'sounds' },
  { label: 'JBL', value: 'jbl', category: 'sounds' },
  { label: 'Beats', value: 'beats', category: 'sounds' },
  { label: 'Apple', value: 'apple', category: 'sounds' },
  { label: 'Samsung', value: 'samsung', category: 'sounds' },
  { label: 'Google', value: 'google', category: 'sounds' },
  { label: 'Amazon', value: 'amazon', category: 'sounds' },
  { label: 'Philips', value: 'philips', category: 'sounds' },
  { label: 'Bowers & Wilkins', value: 'bowerswilkins', category: 'sounds' },
  { label: 'Ultimate Ears', value: 'ultimateears', category: 'sounds' },
  { label: 'Skullcandy', value: 'skullcandy', category: 'sounds' },
  { label: 'AKG', value: 'akg', category: 'sounds' },
];

// Function to seed brands
const seedBrands = async () => {
  try {
    // Delete existing brands
    await Brand.deleteMany({});

    // Insert new brands
    await Brand.insertMany(brandsToSeed);

    console.log('Brands seeded successfully!');
  } catch (error) {
    console.error('Error seeding brands:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

// Run the seeding function
seedBrands();
