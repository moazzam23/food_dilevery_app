import "./App.scss";
import Login from "./Components/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LendingParent from "./Components/LendingParent";
import Foodshow from "./Components/Foodshow";
import Trackmap from "./Components/Trackmap"
import Track from "./Components/Track";
import Ordercheck from "./Components/Order";
import Foodselect from "./Components/Foodselect/Foodselect";
import Shoopingcart from "./Components/Shoopingcart";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path="login" element={<Login />} />
      <Route path="/"  element={<LendingParent />} />
      <Route exact path="/foodshow" element={<Foodshow />} />
      <Route exact path="/Track" element={<Trackmap/>}/>
      <Route exact path="/Trackb" element={<Track/>}/>
      <Route path ="/order" element={<Ordercheck />}/>
      <Route path="/food" element={<Foodselect/>}/>
<Route  path="/check" exact element={<Ordercheck/>}/>
<Route path="/track" element={<Track/>}/>
<Route path="/shop" element={<Shoopingcart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;