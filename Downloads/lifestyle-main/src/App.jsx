import "./App.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Product } from "./components/productshow/Product";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Navbar } from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar";
import { Footer } from "./components/Footer/Footer";


function App() {

  return (

    <div className="container">
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
       <AllRoutes/>
       <Footer></Footer>
    </div>
  );
}

export default App;
