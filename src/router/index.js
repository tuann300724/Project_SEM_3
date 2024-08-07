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
import AccountUser from "../Admin/AccountUser";
import PackageList from "../Admin/PackageList";
import AddPackage from "../Admin/PackageList/AddPackage";
import Country from "../Admin/Country";
import NewAdmin from "../Admin/NewAdmin";
import AddNew from "../Admin/NewAdmin/AddNew";
import AccountDetail from "../Admin/AccountUser/AccountDetail";
import DetailPost from "../Admin/CDPost/DetailPost";
import Newinfo from "../components/New/Newinfo";
import DenyPost from "../Admin/DenyPost";
import DenyDetail from "../Admin/DenyPost/DenyDetail";
import DisactivePost from "../Admin/ListPost/DisactivePost";
import CDEditPost from "../Admin/CDPost/CDEditPost";
import EditPackage from "../Admin/PackageList/EditPackage";
import { Wrapper as PopperWrapperLogin } from "../components/Layout/PopperLogin";
import { Wrapper as PopperWrapperRegister } from "../components/Layout/PopperRegiter";
import { Wrapper as PopperWrapperForgetPass } from "../components/Layout/PopperForgetPass";
import Userinfo from "../User/UserInfo";
import Listpost from "../User/Listpost";
import ViewDetail from "../Admin/NewAdmin/ViewDetail";
import FeedBack from "../User/Feedback";
import FeedbackDetail from "../Admin/Feedback/FeedBackDetail";
import Reservation from "../User/Reservation";
import ChatPrivate from "../User/Chat";
import ChatPrivates from "../User/ChatFromPost";
import Reservations from "../User/Reservations";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: Aboutus },
  { path: "/houseforrent", component: HouseForRent },
  { path: "/house-for-sell", component: HouseForSell },
  { path: "/house-for-rent", component: HouseForRent },
  { path: "/new", component: New },
  { path: "/infopost/:id", component: InfoPost },
  { path: "/infonew/:id", component: Newinfo },
  { path: "/Reservations/:id", component: Reservation},
  { path: "/reservation/:id", component: Reservations },

  { path: "/tinh-lai-suat", component: Toolspage },
  { path: "/login", component: PopperWrapperLogin },
  { path: "/register", component: PopperWrapperRegister },
  { path: "/chat/", component: ChatPrivate },
  { path: "/chats/:id", component: ChatPrivates },
  { path: "/forgetpassword", component: PopperWrapperForgetPass },
];
const privateRoutes = [
  { path: "/user", component: UserPost, layout: null, role: "user" },
  { path: "/user/payments", component: Payments, layout: null, role: "user" },
  { path: "/user/changeinfo", component: Userinfo, layout: null, role: "user" },
  { path: "/user/listpost", component: Listpost, layout: null, role: "user" },
  { path: "/user/feedback", component: FeedBack, layout: null, role: "user" },
  {
    path: "/user/dashboard",
    component: UserDashboard,
    layout: null,
    role: "user",
  },
  { path: "/user/post", component: UserPost, layout: null, role: "user" },
  { path: "/user/package", component: Userpackage, layout: null, role: "user" },
  { path: "/admin", component: DashBoard, role: "Admin" },
  { path: "/admin/cdPost", component: CDPost, role: "Admin" },
  { path: "/admin/ListPost", component: ListPost, role: "Admin" },
  { path: "/admin/AccountUser", component: AccountUser, role: "Admin" },
  { path: "/admin/AccountDetail/:id", component: AccountDetail, role: "Admin" },
  { path: "/admin/PackageList", component: PackageList, role: "Admin" },
  { path: "/admin/AddPackage", component: AddPackage, role: "Admin" },
  { path: "/admin/Country", component: Country, role: "Admin" },
  { path: "/admin/NewAdmin", component: NewAdmin, role: "Admin" },
  { path: "/admin/AddNew", component: AddNew, role: "Admin" },
  { path: "/admin/DetailPost/:id", component: DetailPost, role: "Admin" },
  { path: "/admin/DenyPost", component: DenyPost, role: "Admin" },
  { path: "/admin/DenyDetail/:id", component: DenyDetail, role: "Admin" },
  { path: "/admin/DisactivePost", component: DisactivePost, role: "Admin" },
  { path: "/admin/CDEditPost", component: CDEditPost, role: "Admin" },
  { path: "/admin/EditPackage/:id", component: EditPackage, role: "Admin" },
  { path: "/admin/ViewDetail/:id", component: ViewDetail, role: "Admin" },
  { path: "/admin/FeedbackDetail/:id", component: FeedbackDetail, role: "Admin" },
  { path: "/admin/FeedBack", component: FeedBack, role: "Admin" },
];

export { publicRoutes, privateRoutes };
