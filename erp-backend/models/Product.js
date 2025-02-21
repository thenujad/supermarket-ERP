const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});
const Product = mongoose.model('Product', ProductSchema);