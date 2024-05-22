import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Navbar/Nav";

function Layout() {
  return (
    <div className="flex min-h-[100vh] flex-col justify-between">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
