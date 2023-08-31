import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { Redirect, Route ,BrowserRouter, Switch} from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import Checkout from "./Components/Checkout";



function App() {
  return (
    <>
     
      {/* <About/>
      <Contact/> */}
      <BrowserRouter>
      <Header />
       <Switch>
        <Route exact path="/" component={Home} />
         <Route exact path="/products" component={Product} />
         <Route exact path="/cart" component={Cart} />  
         <Route exact path="/checkout" component={Checkout} />  

 
         <Route exact path="/products/:id" component={ProductDetail} /> 
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        
      </Switch> 
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
