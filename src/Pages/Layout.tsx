import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav} from 'rsuite';

const Layout = () => {


    let display = <Outlet/>

    return (
        <>
            <Navbar>
                <Nav>
                    {/*<Nav.Item className="nav-item">*/}
                    {/*    <Link className="nav-link" to="/">Login</Link>*/}
                    {/*</Nav.Item>*/}
                    {/*<Nav.Item className="nav-item">*/}
                    {/*    <Link className="nav-link" to={LoginStatus !== "notLoggedIn" ?"/myPantries":"#"}>MyPantry</Link>*/}
                    {/*</Nav.Item>*/}
                    {/*<Nav.Item className="nav-item">*/}
                    {/*    <Link className="nav-link" to={LoginStatus !== "notLoggedIn" ?"/pantry":"#"}>Pantry</Link>*/}
                    {/*</Nav.Item>*/}
                    {/*<Nav.Item className="nav-item">*/}
                    {/*    <Link className="nav-link" to={LoginStatus !== "notLoggedIn" ?"/item":"#"}>Items</Link>*/}
                    {/*</Nav.Item>*/}
                </Nav>
            </Navbar>
            <p>THe Layout is working.</p>
        </>

    )
};

export default Layout;