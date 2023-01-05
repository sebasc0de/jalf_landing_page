import { Toggler } from "../components/Cart/Toggler";
import { Filterbar } from "../components/Filterbar";
import { ProductList } from "../components/Product/ProductList";
import { Public } from "../layouts/Public";

const Products = () => {
  return (
    <Public>
      <section className="productsSection">
        <Filterbar topDistance="top-75" />
        <Title />
        <ProductList />
        <Toggler />
      </section>
    </Public>
  );
};

const Title = () => {
  return (
    <div className="px-2 mt-1">
      <h4>Productos para tu negocio</h4>
      <p>
        Encuentra productos para revender o utilizar en tu negocio de estética,
        en esta sección.
      </p>
    </div>
  );
};

export default Products;
