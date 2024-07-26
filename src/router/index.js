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
import Payments from "../User/Payments";
import Userpackage from "../User/UserPackage";
import Banner from "../Admin/Banner";
import AccountUser from "../Admin/AccountUser";
import PackageList from "../Admin/PackageList";
import AddBanner from "../Admin/Banner/AddBanner";
import AddPackage from "../Admin/PackageList/AddPackage";
import Country from "../Admin/Country";
import NewAdmin from "../Admin/NewAdmin";
import AddNew from "../Admin/NewAdmin/AddNew";
import AccountDetail from "../Admin/AccountUser/AccountDetail";
import DetailPost from "../Admin/CDPost/DetailPost";
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
  {path : "/user/payments", component: Payments, layout: null},
  {path : "/user/dashboard", component: UserDashboard, layout: null},
  {path : "/user/post", component: UserPost, layout: null},
  {path : "/user/package", component: Userpackage, layout: null},
];
const privateRoutes = [
  { path: '/admin', component : DashBoard },
  { path: '/admin/cdPost', component : CDPost },
  { path: '/admin/ListPost', component : ListPost },
  { path: '/admin/Banner', component : Banner },
  { path: '/admin/AccountUser', component : AccountUser },
  { path: '/admin/AccountDetail/:id', component : AccountDetail },
  { path: '/admin/PackageList', component : PackageList },
  { path: '/admin/AddBanner', component : AddBanner },
  { path: '/admin/AddPackage', component : AddPackage },
  { path: '/admin/Country', component : Country },
  { path: '/admin/NewAdmin', component : NewAdmin },
  { path: '/admin/AddNew', component : AddNew },
  { path: '/admin/DetailPost', component : DetailPost },
  
];
export { publicRoutes, privateRoutes };
