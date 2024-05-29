require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const { Category } = require('./model/Category');

// Connect to MongoDB using the URL from environment variables
mongoose.connect(process.env.MONGODB_URL);

// Define an array of categories to seed
const categoriesToSeed = [
  { label: 'Gadgets', value: 'gadgets' },
  { label: 'Devices', value: 'devices' },
  { label: 'Sounds', value: 'sounds' },
  // Add more categories as needed
];

// Function to seed categories
const seedCategories = async () => {
  try {
    // Delete existing categories
    await Category.deleteMany({});

    // Insert new categories
    await Category.insertMany(categoriesToSeed);

    console.log('Categories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

// Run the seeding function
seedCategories();
