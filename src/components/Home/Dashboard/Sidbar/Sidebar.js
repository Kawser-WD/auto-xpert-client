import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Outlet,
    Link
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const drawerWidth = 200;

function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider />
           <Box
            sx={{ flexGrow: 1, p: 3 }}
           >
           <Link to="/" style={{textDecoration:'none',color:'#130f40', fontWeight:'700'}}><Button color="inherit">Home</Button></Link>
            <Link to="/orderlist"  style={{textDecoration:'none', color:'#130f40', fontWeight:'bold'}}><Button color="inherit">Order List</Button></Link>
            <Link to="/reviews"  style={{textDecoration:'none',color:'#130f40', fontWeight:'bold'}}><Button color="inherit">Review</Button></Link>
            
            {/* {
                admin &&  */}
          <Box>
              <Link to="/addservice"  style={{textDecoration:'none',color:'#130f40', fontWeight:'bold'}}><Button color="inherit">Add Service</Button></Link>
            <Link to="/manageservice"  style={{textDecoration:'none',color:'#130f40', fontWeight:'bold'}}><Button color="inherit">Manage Service</Button></Link>
            <Link to="/makeadmin"  style={{textDecoration:'none',color:'#130f40', fontWeight:'bold'}}><Button color="inherit">Make Admin</Button></Link>
          </Box>
            {/* } */}
           </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'#fff'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color:'#130f40' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                     variant="h6"
                      noWrap component="div"
                      sx={{color:'#000'}}
                      >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Sidebar;





























// import {
//   faGripHorizontal, faPlus, faServer, faSortAlphaDown, faStickyNote,
//   faUserPlus
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useAuth from '../../../../hooks/useFirebase';
// import "./Sidebar.css";

// const Sidebar = () => {
//   const { user } = useAuth();
//   const [isAdmin, setIsAdmin] = useState(false);
//   useEffect(() => {
//     const url = `https://fast-tundra-26800.herokuapp.com/isAdmin`;
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ email: user.email }),
//     })
//       .then((res) => res.json())
//       .then((result) => setIsAdmin(result));
//   }, []);
//   return (
//     <div
//       className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
//       style={{ height: "100vh" }}
//     >
//         <ul className="list-unstyled">
//       {
//           ! isAdmin && <div>
              
//         <li>
//           <Link to="/">
//             <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
//           </Link>
//         </li>
        
//         <li>
//           <Link to="/orderlist">
//             <FontAwesomeIcon icon={faSortAlphaDown} /> <span>Order list</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/reviews">
//             <FontAwesomeIcon icon={faStickyNote} /> <span>Review</span>
//           </Link>
//         </li>
//           </div>
//       }
//         { isAdmin && <div>

//         <li>
//           <Link to="/addservice">
//             <FontAwesomeIcon icon={faPlus} />
//             <span>Add service</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/makeadmin">
//             <FontAwesomeIcon icon={faUserPlus} />
//             <span>Make Admin</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/manageservice">
//             <FontAwesomeIcon icon={faServer} /> <span>Manage Service</span>
//           </Link>
//         </li>
//         </div>}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
