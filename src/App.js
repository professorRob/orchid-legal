import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/Footer.js';
import './assets/ColorScheme.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Banner />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
