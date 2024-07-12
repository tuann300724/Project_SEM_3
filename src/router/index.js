import HomePage from "../components/HomePage"
import Aboutus from "../components/Aboutus"
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/about", component: Aboutus},
]
const privateRoutes =[

]
export { publicRoutes, privateRoutes }
