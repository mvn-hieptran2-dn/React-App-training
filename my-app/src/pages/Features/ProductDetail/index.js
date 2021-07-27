import React from 'react';
import logo from '../../../assets/img/product.jpg';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id);

  return (
    <section className="section-product-detail">
      <div className="container">
        <div className="product-detail-wrap">
          <h3 className="product-name">Product Detail</h3>
          <div className="product-card">
            <img className="product-image" src={logo} alt="logo" />
            <div>
              <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna</p>
              <p className="product-price">1.800.000đ</p>
              <button className="btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
