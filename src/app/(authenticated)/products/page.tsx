import ProductsTable from "@/app/(authenticated)/products/ProductsTable";
import Typography from "@mui/material/Typography";

const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const {products} = await res.json()
    return products
}

const Products = async () => {
    const products = await getProducts()
    return (
        <div>
            <Typography variant="h5">
                Products
            </Typography>

            <ProductsTable data={products}/>
        </div>
    );
}

export default Products;