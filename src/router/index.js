import HomePage from "../components/HomePage";
import Aboutus from "../components/Aboutus";
import HouseForRent from "../components/HouseForRent";
import New from "../components/New";
import HouseForSell from "../components/HouseForSell";
import InfoPost from "../components/InfoPost";
import LayoutUser from "../components/UserManager/LayoutUser";
import UserPost from "../User/UserPost";
import Toolspage from "../components/Toolpage";
import UserDashboard from "../User/UserDashboard";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: Aboutus },
  { path: "/houseforrent", component: HouseForRent },
  { path: "/house-for-sell", component: HouseForSell },
  { path: "/house-for-rent", component: HouseForRent },
  { path: "/new", component: New },
  { path: "/infopost", component: InfoPost },
  { path: "/usermanager/*", component: LayoutUser },
  {path : "/user", component: UserPost, layout: null},
  {path : "/user/dashboard", component: UserDashboard, layout: null},
  { path: "/tinh-lai-suat", component: Toolspage },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
