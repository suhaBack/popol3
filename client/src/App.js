import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import Main from './components/mainPage/main';
import Payment from './components/payment/payment';
import Mypage from './components/mypage/mypage';
import ProductHotel from './components/product/hotel/productHotel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './components/detail/detail';
import AdminPage from './components/adminPage/adminPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path='/hotel' element={<ProductHotel></ProductHotel>}></Route>
        <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;