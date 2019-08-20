import React from "react";
import Locations from "./Locations";
import Users from "./Users";
import styled from "styled-components";

const Dashboard = () => {
    return (
        <div>
            <h1>GroupShare</h1>
            <p>-Users Online-</p>
            <Container>
                <Locations />
                <Users />
            </Container>
        </div>
    );
};

export default Dashboard;

const Container = styled.div`
    border: 1px solid red;
    display: flex;
    width: 75%;
    height: auto;
    /* margin: 0 auto; */
`;
