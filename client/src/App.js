import Download from "./components/downloads/download";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Home from "./components/Home/home";
import Navbar from "./components/navbar/navbar.jsx";
import Review from "./components/test/review";
// import Testimonial from "./components/testimonials/testimonial.jsx";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
     <Home></Home>
     <Features></Features>
     <Download></Download>
     {/* <Testimonial></Testimonial> */}
     <Review></Review>
     <Footer></Footer>
    </div>
  );
}

export default App;
