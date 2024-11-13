import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts(6);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Sản phẩm mới</p>
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

export default ProductList;
