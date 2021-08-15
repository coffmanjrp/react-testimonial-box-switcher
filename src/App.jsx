import { useEffect, useState } from 'react';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import Icon from './components/Icon';
import testimonials from './data/data';
import './App.scss';

function App() {
  const [index, setIndex] = useState(0);
  const { text, name, photo, position, color } = testimonials[index];

  useEffect(() => {
    setInterval(
      () =>
        setIndex((prev) => (prev + 1 > testimonials.length - 1 ? 0 : prev + 1)),
      10000
    );

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="testimonial-container" style={{ backgroundColor: color }}>
        <div className="progress-bar" />
        <Icon icon={<FaQuoteRight />} className="icon icon-right" />
        <Icon icon={<FaQuoteLeft />} className="icon icon-left" />
        <div className="testimonial">
          <p>{text}</p>
        </div>
        <div className="user">
          <img src={photo} alt={name} className="user-image" />
          <div className="user-details">
            <h4 className="username">{name}</h4>
            <p className="role">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
