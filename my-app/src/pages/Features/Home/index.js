import { Link } from 'react-router-dom';
import HeroBnaner from './../../../components/HeroBanner';

const Home = () => {
  return (
    <div>
      <HeroBnaner />
      <div className="container">
        <h1>Home page</h1>
        <Link to="/products/1">To products detail</Link>
      </div>
    </div>
  );
};

export default Home;
