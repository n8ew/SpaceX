import React from "react";
import { Nav } from "../../styledComponents/Navbar.styled";
import logo from "../../img/logo.png";

const Navbar = ({ handeler }) => {
    const handleBack = () => {
        if (handeler.current === 0) {
            return handeler.setToEnd();
        }
        return handeler.subtractFromCurrentIndex();
    };
    const handleForward = () => {
        if (handeler.current === handeler.maxIndex) {
            return handeler.setToStart();
        }
        return handeler.addToIndex();
    };

    return (
        <Nav>
            <button onClick={handleBack}>
                <span className="material-icons">arrow_back_ios</span>
            </button>
            <img src={logo} alt="spaceX logo" />
            <button onClick={handleForward}>
                <span className="material-icons">arrow_forward_ios</span>
            </button>
        </Nav>
    );
};

export default Navbar;
