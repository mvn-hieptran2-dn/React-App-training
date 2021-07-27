import { Link } from 'react-router-dom';
import HeroBnaner from './../../../components/HeroBanner';
import product from '../../../assets/img/product.jpg';

const Home = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <HeroBnaner />
      <section className="section-product">
        <div className="container">
          <h2 className="section-title">List Product</h2>
          <ul className="product-list row">
            {
              products.map(e => (
                <li className="product-item col-4" key={e.id}>
                  <div className="product-wrap">
                    <Link to="/products" className="product-image">
                      <img src={product} />
                    </Link>
                    <div className="product-card">
                      <h4 className="product-name">Mercedes Benz</h4>
                      <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna</p>
                    </div>
                    <a href="" className="product-btn"><i className="fas fa-cart-plus"></i></a>
                  </div>
                </li>
              )
              )
            }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
