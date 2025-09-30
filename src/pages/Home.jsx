import './Home.css';
import Background from '../components/pages/home/Background';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Background />

    <div className="overlay-container">
      <h4 className="logo">Bird & Brew </h4>
      <h2 className="tagline">The Humble Crispy Chicken Reinvented, Served with the Coldest of Beers </h2>
      <Link to="/booking" className="button" >Book a Table</Link>
      <p className="footer-text">Crispy Chicken - Cold Beer - Good Vibes</p>
    </div>

    </>
  );
}
