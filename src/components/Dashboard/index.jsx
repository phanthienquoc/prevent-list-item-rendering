import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../providers/authenticate/OAuthGoogle";

import './style.css'
const Dashboard = (props) => {
    const navigate = useNavigate();
    const { signIn, signOut, googleUser } = useGoogleAuth();
    const [open, setOpen] = useState(false)

    const _handleCloseSideMenu = () => {
        setOpen(!open)
    }

    const _handleOpenSideMenu = () => {
        setOpen(!open)
    }

    const _handleLogout = () => {
        signOut();
        navigate("/", { replace: true })
    }

    return (
        <div>
            <div>
                <div>
                    <button onClick={_handleOpenSideMenu}>&#9776; open</button>
                </div>
                <div>
                    Dashboard
                    <div>
                        {JSON.stringify(googleUser?.profileObj)}
                    </div>
                </div>
            </div>
            <div id="mySidenav" className={open ? `sidenav open` : `sidenav`}>
                <a href="#"><button onClick={_handleCloseSideMenu}>x</button></a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
                <a>
                    <button onClick={_handleLogout}>Log out</button>
                </a>
            </div>
        </div>

    )
}

export default Dashboard;