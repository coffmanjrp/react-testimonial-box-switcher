import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import Icon from './components/Icon';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="testimonial-container">
        <div className="progress-bar" />
        <Icon icon={<FaQuoteRight />} className="icon icon-right" />
        <Icon icon={<FaQuoteLeft />} className="icon icon-left" />
        <div className="testimonial">
          <p>
            I've worked with literally hundreds of HTML/CSS developers and I
            have to say the top spot goes to this guy. This guy is an amazing
            developer. He stresses on good, clean code and pays heed to the
            details. I love developers who respect each and every aspect of a
            throughly thought out design and do their best to put it in code. He
            goes over and beyond and transforms ART into PIXELS - without a
            glitch, every time.
          </p>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
            alt=""
            className="user-image"
          />
          <div className="user-details">
            <h4 className="username">Miyah Myles</h4>
            <p className="role">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
