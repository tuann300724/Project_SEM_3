import HomePage from "../components/HomePage";
import Aboutus from "../components/Aboutus";
import Searchsell from "../components/Aboutus/Searchsell";
import HouseForRent from "../components/HouseForRent";
import New from "../components/New";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: Aboutus },
  { path: "/search", component: Searchsell },
  { path: "/houseforrent", component: HouseForRent },
  { path: "/new", component: New },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
