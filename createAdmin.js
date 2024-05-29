require('dotenv').config();
const mongoose = require('mongoose');
const crypto = require('crypto');
const { User } = require('./model/User');

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');

    const email = '';
    const password = '';

    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(password, salt, 310000, 32, 'sha256', async (err, hashedPassword) => {
      if (err) throw err;

      const adminUser = new User({
        email,
        password: hashedPassword,
        salt,
        role: 'admin',
      });

      await adminUser.save();
      console.log('Admin user created successfully');
      mongoose.disconnect();
    });
  } catch (err) {
    console.error('Error creating admin user:', err);
    mongoose.disconnect();
  }
}

createAdmin();
