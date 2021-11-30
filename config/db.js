const mongoose = require('mongoose');
const db = 'mongodb+srv://pronode:trungkaio2651@cluster0.4nkca.mongodb.net/ProjectNodejs?retryWrites=true&w=majority';


const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;