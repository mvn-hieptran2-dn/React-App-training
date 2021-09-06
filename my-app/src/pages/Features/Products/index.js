import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from '../../../store/favSlice';
import { FaHeart } from "react-icons/fa";

const Products = () => {
  const dispatch = useDispatch();
  // const allProduct = useSelector(state => state.products.value);
  const [products, setProducts] = useState([
    { id: 1, name: 'Mercedes C180 AMG 2021', image: require('../../../assets/img/productMec/detail/1.jpeg').default, price: '1.499.000.000₫', favs: false },
    { id: 2, name: 'Mercedes-AMG C300 2021', image: require('../../../assets/img/productMec/detail/2.jpeg').default, price: '1.969.000.000₫', favs: false },
    { id: 3, name: 'Mercedes-Benz C200 Exclusive', image: require('../../../assets/img/productMec/detail/3.jpeg').default, price: '1.699.000.000₫', favs: false },
    { id: 4, name: 'Mercedes E180 2021', image: require('../../../assets/img/productMec/detail/4.jpeg').default, price: '2.050.000.000₫', favs: false },
    { id: 5, name: 'Mercedes E200 Exclusive 2021', image: require('../../../assets/img/productMec/detail/5.jpeg').default, price: '2.310.000.000₫', favs: false },
    { id: 6, name: 'Mercedes E300 AMG 2021', image: require('../../../assets/img/productMec/detail/6.jpeg').default, price: '2.920.000.000₫', favs: false },
    { id: 7, name: 'Mercedes-Benz S450 L', image: require('../../../assets/img/productMec/detail/7.jpeg').default, price: '4.299.000.000₫', favs: false },
    { id: 8, name: 'Mercedes-Benz S450 Luxury', image: require('../../../assets/img/productMec/detail/8.jpeg').default, price: '4.969.000.000₫', favs: false },
    { id: 9, name: 'Mercedes GLC 200 4 Matic', image: require('../../../assets/img/productMec/detail/9.jpeg').default, price: '2.099.000.000₫', favs: false },
    { id: 10, name: 'Mercedes GLC 300 4 Matic 2021', image: require('../../../assets/img/productMec/detail/10.jpeg').default, price: '2.499.000.000₫', favs: false },
    { id: 11, name: 'Mercedes GLC 300 4Matic Coupe 2021', image: require('../../../assets/img/productMec/detail/11.jpeg').default, price: '3.069.000.000₫', favs: false },
    { id: 12, name: 'Mercedes-Benz GLC 200 2021', image: require('../../../assets/img/productMec/detail/12.jpeg').default, price: '1.799.000.000₫', favs: false },
    { id: 13, name: 'Mercedes GLB 200 AMG 2021', image: require('../../../assets/img/productMec/detail/13.jpeg').default, price: 'Contact', favs: false },
    { id: 14, name: 'Mercedes GLE 450 4 Matic', image: require('../../../assets/img/productMec/detail/14.jpeg').default, price: '4.409.000.000₫', favs: false },
  ]);

  // useEffect(() => {
  //   setProducts(products.slice((page - 1) * 6, page * 6));
  // }, [page, products]);

  // function handleChangePage(number) {
  //   if (number >= pages[0] && number <= pages[pages.length - 1]) {
  //     setPage(number);
  //   }
  // }

  const handleFav = (e, id) => {
    e.preventDefault();
    const newProds = products.map(e => {
      if (e.id === id) {
        e.favs = !e.favs;
        console.log('asd');
      }
      return e;
    })
    setProducts(newProds);
    dispatch(toggle(id));
  }

  return (
    <section className="section-product">
      <div className="container">
        <h2 className="section-title">Store Mercedes Benz</h2>
        <ul className="product-list row">
          {
            products.map(e => (
              <li className="product-item col-4" key={e.id}>
                <div className="product-wrap">
                  <Link to={`/product/${e.id}`} className="product-image">
                    <div className="thumb-img">
                      <img src={e.image} />
                    </div>
                    <span className={`product-fav ${e.favs ? 'active' : ''}`} onClick={(event) => handleFav(event, e.id)}><FaHeart /></span>
                  </Link>
                  <div className="product-card">
                    <h4 className="product-name">{e.name}</h4>
                    <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna</p>
                  </div>
                  <p className="product-price">Price: <span className="text-red">{e.price}</span></p>
                </div>
              </li>
            )
            )
          }
        </ul>
        {/* <ul className="pagination">
          <li className="page-item" onClick={() => handleChangePage(pages[0])}>
            <span className={page === pages[0] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleDoubleLeft /></i>
            </span>
          </li>
          <li className="page-item" onClick={() => handleChangePage(page - 1)}>
            <span className={page === pages[0] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleLeft /></i>
            </span>
          </li>
          {
            pages.map(item =>
              <li className="page-item pointer" onClick={() => handleChangePage(item)} key={item}>
                <span className={page === item ? "page-link link-text active" : "page-link link-text"}>{item}</span>
              </li>
            )
          }
          <li className="page-item" onClick={() => handleChangePage(page + 1)}>
            <span className={page === pages[pages.length - 1] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleRight /></i>
            </span>
          </li>
          <li className="page-item" onClick={() => handleChangePage(pages[pages.length - 1])}>
            <span className={page === pages[pages.length - 1] ? "page-link txt-gray" : "page-link pointer"}>
              <i className=""><FaAngleDoubleRight /></i>
            </span>
          </li>
        </ul> */}
      </div>
    </section>
  );
}
export default Products;
