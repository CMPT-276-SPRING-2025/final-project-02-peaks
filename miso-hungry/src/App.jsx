import Homepage from './pages/Homepage.jsx';
import Form from './pages/Form.jsx';
import Learn from './pages/Learn.jsx';
import Logo from './components/Logo.jsx';
import Result from './components/Result.jsx';
import Recipe from './pages/Recipe.jsx';

import './App.css';

function App() {
  return (
    <>
      <Logo/>
      <Homepage/>
      <Form/>
      <Learn/>
      <Recipe/>
    </>
  );
}

export default App;
