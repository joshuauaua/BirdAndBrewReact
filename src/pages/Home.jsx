import './Home.css';
import Background from '../components/pages/home/Background';

export default function Home() {
  return (
    <>
    <Background />

    <div className="overlay-container">
      <h4 className="logo">Bird & Brew </h4>
      <h2 className="tagline">The Humble Crispy Chicken Reinvented, Served with the Coldest of Beers </h2>
      <button className="button">Book a Table</button>
      <p className="footer-text">Crispy Chicken - Cold Beer - Good Vibes</p>
    </div>

    </>
  );
}
