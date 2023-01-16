import ProductItem from './ProductItem';
import classes from './Products.module.css';

const my_products = [
  {
    id: 1,
    price: 1500,
    title: 'My first product',
    description: 'My first product that was created'
  },
  {
    id: 2,
    price: 10000,
    title: 'My Second product',
    description: 'My Second product that got me here'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {my_products.map(product => (
          <ProductItem
          key={product.id}
          id={product.id}
          title= {product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
