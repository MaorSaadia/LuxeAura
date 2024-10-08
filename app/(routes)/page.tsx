import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("f4aa02c1-73c5-4e17-901f-466d2e7bd8e1");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
