import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav} from 'rsuite';

const Layout = () => {


    let display = <Outlet/>

    return (
        <>
            <Navbar>
                <Nav>
                    <Nav.Item className="nav-item">
                        <Link className="nav-link" to="/Main">Main</Link>
                    </Nav.Item>

                </Nav>
            </Navbar>
            {display}
        </>
    )
};

export default Layout;