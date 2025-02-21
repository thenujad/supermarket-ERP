try {
    mongoose.connect('mongodb://127.0.0.1:27017/supermarket-erp');
    console.log('MongoDB Connected (Local)');
} catch (err) {
    console.error('MongoDB Connection Error:', err);
}
