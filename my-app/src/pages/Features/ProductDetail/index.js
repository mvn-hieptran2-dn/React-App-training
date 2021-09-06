import React from 'react';
import logo from '../../../assets/img/product.jpg';
import { useParams } from 'react-router-dom';
import { increment, decrement } from '../../../store/couterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  // const count = useSelector(state => state.counter.value)
  // const dispatch = useDispatch();

  return (
    <section className="section-product-detail">
      <div className="container">
        <div className="product-detail-wrap">
          <h3 className="product-name">Product Detail {id}</h3>
          <div className="product-card">
            <div className="product-image">
              <img  src={logo} alt="logo" />
              {/* <span className="product-fav"><FaHeart /></span> */}
            </div>
            <div>
              <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna</p>
              <p className="product-price">Price: <span className="text-red">2.800.000đ</span></p>
              {/* <button className="btn">Add to cart</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
