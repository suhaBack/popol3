import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Main from "./components/mainPage/main";
import Payment from "./components/payment/payment";
import Mypage from "./components/mypage/mypage";
import ProductHotel from "./components/product/hotel/productHotel";
import ProductCamping from "./components/product/camping/productcamping";
import ProductPenstion from "./components/product/penstion/productpenstion";
import ProductGuesthouse from "./components/product/guesthouse/productguesthouse";
import ProductMotel from "./components/product/motel/productMotel";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./components/detail/detail";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Seemore from "./components/seemore/seemore";
import Complet from "./components/payment/complete";
import Search from "./components/search/search";
import ReviewWrite from "./components/review/reviewwrite";
import ScrollToTopButton from './topbtn.js'
import Test from "./components/test/test";
import Newroom from "./components/newroom/newroom.js"

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTopButton></ScrollToTopButton>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route path="/camping" element={<ProductCamping></ProductCamping>}></Route>
        <Route path="/guesthouse" element={<ProductGuesthouse></ProductGuesthouse>}></Route>
        <Route path="/hotel" element={<ProductHotel></ProductHotel>}></Route>
        <Route path="/motel" element={<ProductMotel></ProductMotel>}></Route>
        <Route path="/penstion" element={<ProductPenstion></ProductPenstion>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/seemore" element={<Seemore />}></Route>
        <Route path="/payment/complete" element={<Complet />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/reviewwrite" element={<ReviewWrite />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/newroom" element={<Newroom />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;