import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import Main from './components/mainPage/main';
import Yea from './components/Yea/Yea';
import Mypage from './components/mypage/mypage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Yea" element={<Yea></Yea>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;