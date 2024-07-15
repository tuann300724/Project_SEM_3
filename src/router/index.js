import HomePage from "../components/HomePage"
import Aboutus from "../components/Aboutus"
import Searchsell from "../components/Aboutus/Searchsell"
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/about", component: Aboutus},
    {path: "/search", component: Searchsell},
]
const privateRoutes =[

]
export { publicRoutes, privateRoutes }
