import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'b1',
    price: 100,
    title: 'My book',
    description: 'This is so helpful'
  },
  {
    id: 'p1',
    price: 30,
    title: 'My pen',
    description: 'Make writing so easy'
  },
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)
        }
      </ul>
    </section>
  );
};

export default Products;
