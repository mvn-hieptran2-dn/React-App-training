import { Link } from 'react-router-dom';
import HeroBnaner from './../../../components/HeroBanner';
// import product from '../../../assets/img/product.jpg';

const Home = () => {
  const products = [
    { id: 1, name: 'Mercedes-Benz C-Class', image: require('../../../assets/img/productMec/1.jpeg').default, price: '1,399 Tỷ',},
    { id: 2, name: 'Mercedes-Benz E-Class', image: require('../../../assets/img/productMec/2.jpeg').default, price: '2,050 Tỷ', },
    { id: 3, name: 'Mercedes-Benz S-Class', image: require('../../../assets/img/productMec/3.jpeg').default, price: '4,299 Tỷ', },
    { id: 4, name: 'Mercedes-Benz GLC', image: require('../../../assets/img/productMec/4.jpeg').default, price: '1.799 Tỷ', },
    { id: 5, name: 'Mercedes-Benz GLB', image: require('../../../assets/img/productMec/5.jpeg').default, price: '1.999 Tỷ', },
    { id: 6, name: 'Mercedes-Benz GLE', image: require('../../../assets/img/productMec/6.jpeg').default, price: '4,409 Tỷ', },
  ]
  
  return (
    <div>
      <HeroBnaner />
      <section className="section-product">
        <div className="container">
          {/* <h2 className="section-title">List Product</h2> */}
          <h3 className="title-product">Mercedes Benz Da Nang</h3>
          <ul className="product-list row">
            {
              products.map(e => (
                <li className="product-item col-4" key={e.id}>
                  <div className="product-wrap">
                    <Link to="/products" className="product-image">
                      <img src={e.image} alt="img-product" />
                      {/* <span className="product-fav"><FaHeart /></span> */}
                    </Link>
                    <div className="product-card">
                      <h4 className="product-name">{e.name}</h4>
                      <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna</p>
                      <p className="product-price">Price From: <span className="text-red">{e.price}</span></p>
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
