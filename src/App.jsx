import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import clevertap from 'clevertap-web-sdk';
import { useEffect } from "react";




const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  useEffect(()=>{
    clevertap.event.push("React Web Test")
    clevertap.notifications.push({
      "titleText":"Would you like to receive Push Notifications?",
      "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
      "okButtonText":"Ok",
      "rejectButtonText":"Cancel",
      "okButtonColor":"#F28046",
      "askAgainTimeInSeconds":5,
      "serviceWorkerPath": "./firebase-messaging-sw.js"
  });
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
