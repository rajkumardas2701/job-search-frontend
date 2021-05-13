import '../styles/App.css';
// import Signin from '../layouts/Signin';
import Signup from '../layouts/Signup';
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
