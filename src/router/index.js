import HomePage from "../components/HomePage"
import Aboutus from "../components/Aboutus"
import noclue from "../components/NoClue"
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/about", component: Aboutus},
    {path: "/noclue", component: noclue, layout: null}
]
const privateRoutes =[

]
export { publicRoutes, privateRoutes }
