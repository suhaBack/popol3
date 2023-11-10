import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import Main from './components/mainPage/main';
import Yea from './components/Yea/Yea';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Yea" element={<Yea></Yea>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;