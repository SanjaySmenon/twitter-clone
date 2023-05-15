
import './App.css';
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import { Route, Routes } from "react-router-dom";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Lists from "./pages/Lists/Lists";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} />
        <Route path="lists" element={<Lists />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
