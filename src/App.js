import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { LocationProvider } from "lib/location";
import { AuthProvider } from "lib/auth";
import { BasketProvider } from "lib/basket";
import Homepage from 'page/Homepage';
import RestaurantIndex from 'page/RestaurantIndex';
import Restaurant from 'page/Restaurant';
import Layout from 'Layout';
import Signup from "page/Signup";
import Login from "page/Login";



function App() {

  return (
    <div>
      <LocationProvider>
        <AuthProvider>
          <BasketProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<Homepage />} />
              <Route path="restaurants" element={<RestaurantIndex />} />
              <Route path="restaurants/:id" element={<Restaurant/>} />
              <Route path="signup" element={<Signup/>}/>
              <Route path="login" element={<Login/>}/>
              </Route>
            </Routes>
          </Router>
          </BasketProvider>
          </AuthProvider>
      </LocationProvider>
    </div>


  );
}


export default App;
