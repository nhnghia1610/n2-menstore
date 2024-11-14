import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";


const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      {!products || products.length === 0 ? (
        <p className="text-body-bold">Không tìm thấy sản phẩm nào</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
