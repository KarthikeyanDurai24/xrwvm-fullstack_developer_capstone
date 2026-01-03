import LoginPanel from "./components/Login/Login";  
import Register from "./components/Register/Register";
import Dealers from "./components/Dealers/Dealers";  // Dealers list
import Dealer from "./components/Dealers/Dealer";    // Dealer-specific page
import PostReview from "./components/Dealers/PostReview";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Login and Registration */}
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />

      {/* Dealers list page */}
      <Route path="/dealers" element={<Dealers />} />

      {/* Dealer detail page */}
      <Route path="/dealer/:id" element={<Dealer />} />

      {/* Post review page */}
      <Route path="/postreview/:id" element={<PostReview />} />
    </Routes>
  );
}

export default App;
