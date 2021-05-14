import '../styles/App.css';
// import Signin from './Signin';
import Signup from './Signup';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/Navbar';

const App = () => (
  <div className="App">
    <NavBar />
    <Signup />
    <Footer />
  </div>
);

export default App;
