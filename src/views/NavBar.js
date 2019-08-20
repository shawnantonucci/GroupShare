import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <HeaderNav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/locations">Locations</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/">Log Out</NavLink>
                <h1>GroupShare</h1>
            </HeaderNav>
        </div>
    );
};

export default NavBar;

const HeaderNav = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: flex-end; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    border-bottom: 1px solid black;
    background: #ccc;
    height: 60px;

    h1 {
        align-self: center;
        font-size: 24px;
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 10%;
    }
`;

const NavLink = styled(Link)`
    margin-right: 25px;
    margin-left: 3%;
    align-self: center;
    width: 5%;
    white-space: nowrap;
    font-size: 16px;
    color: black;
    text-decoration-line: none;

    :hover {
        font-size: 18px;
        font-weight: bold;
    }
`;
