import Products from '../models/Products.model.js';
import ProductStat from '../models/ProductStats.model.js';

export const getProducts = async (req, res) => {
    try {
        //get alll the products
        const products = await Products.find();
        // console.log(products);
        //map throough all the products for the id

        const productsWithStats = await Promise.all(
            products.map(async (item) => {
                const stat = await ProductStat.find({
                    productId: item._id

                });
                return {
                    ...item._doc,
                    stat
                }
            })
            
        )
        res.status(200).json(productsWithStats);
      

        /*use aggregate functions to make it fast */
        // console.log(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}