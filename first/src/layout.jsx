import { Outlet } from "react-router-dom";
import Topnav from "./pages/component.jsx/TopNav";
const Layout=()=>{
return(
    <>
    <Topnav/>
    <Outlet/>
    </>
)
    

}
export default Layout;