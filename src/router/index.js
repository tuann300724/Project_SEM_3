import HomePage from "../components/HomePage";
import Aboutus from "../components/Aboutus";
import Searchsell from "../components/Aboutus/Searchsell";
import HouseForRent from "../components/HouseForRent";
import New from "../components/New";
import LayoutUser from "../components/UserManager/LayoutUser";


const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: Aboutus },
  { path: "/search", component: Searchsell },
  { path: "/houseforrent", component: HouseForRent },
  { path: "/new", component: New },
  { path: "/usermanager/*", component: LayoutUser },


];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
