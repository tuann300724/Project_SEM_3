import HomePage from "../components/HomePage";
import Aboutus from "../components/Aboutus";
import HouseForRent from "../components/HouseForRent";
import New from "../components/New";
import HouseForSell from "../components/HouseForSell";
import InfoPost from "../components/InfoPost";
import DashBoard from "../Admin/Dashboard";
import CDPost from "../Admin/CDPost";
import ListPost from "../Admin/ListPost";
import UserPost from "../User/UserPost";
import Toolspage from "../components/Toolpage";
import UserDashboard from "../User/UserDashboard";
import Userpackage from "../User/UserPackage";
import Newinfo from "../components/New/Newinfo";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: Aboutus },
  { path: "/houseforrent", component: HouseForRent },
  { path: "/house-for-sell", component: HouseForSell },
  { path: "/house-for-rent", component: HouseForRent },
  { path: "/new", component: New },
  { path: "/infopost", component: InfoPost },
  { path: "/infonew", component: Newinfo },
  { path: "/tinh-lai-suat", component: Toolspage },
  {path : "/user", component: UserPost, layout: null},
  {path : "/user/dashboard", component: UserDashboard, layout: null},
  {path : "/user/post", component: UserPost, layout: null},
  {path : "/user/package", component: Userpackage, layout: null},
];
const privateRoutes = [
  { path: '/admin', component : DashBoard },
  { path: '/admin/cdPost', component : CDPost },
  { path: '/admin/ListPost', component : ListPost }

];
export { publicRoutes, privateRoutes };
