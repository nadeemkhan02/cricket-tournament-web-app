import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

const Navbar = () => {
    return (
        <>
            <nav style={{justifyContent: "center"}} class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a  class="navbar-brand" href="#"><SportsCricketIcon /> Cricket League Tournament <SportsCricketIcon /></a>
            </nav>
        </>
    )
}
export default Navbar;