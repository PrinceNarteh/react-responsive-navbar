import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
